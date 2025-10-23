import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-4845c56b/health", (c) => {
  return c.json({ status: "ok" });
});

// Waitlist signup endpoint
app.post("/make-server-4845c56b/waitlist", async (c) => {
  try {
    const { name, email } = await c.req.json();

    // Validate input
    if (!name || !email) {
      return c.json({ error: "Name and email are required" }, 400);
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Invalid email format" }, 400);
    }

    // Check if email already exists
    const existingEntry = await kv.get(`waitlist:${email}`);
    if (existingEntry) {
      return c.json({ error: "Email already registered" }, 409);
    }

    // Store the waitlist entry
    const timestamp = new Date().toISOString();
    await kv.set(`waitlist:${email}`, {
      name,
      email,
      timestamp,
    });

    // Get current count
    const allEntries = await kv.getByPrefix('waitlist:');
    const count = allEntries.length;

    console.log(`Waitlist signup: ${email} - Total count: ${count}`);

    return c.json({ 
      success: true, 
      message: "Successfully joined the waitlist",
      count 
    });
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return c.json({ error: "Failed to process signup" }, 500);
  }
});

// Get waitlist count endpoint
app.get("/make-server-4845c56b/waitlist/count", async (c) => {
  try {
    const allEntries = await kv.getByPrefix('waitlist:');
    return c.json({ count: allEntries.length });
  } catch (error) {
    console.error("Error getting waitlist count:", error);
    return c.json({ error: "Failed to get count" }, 500);
  }
});

Deno.serve(app.fetch);