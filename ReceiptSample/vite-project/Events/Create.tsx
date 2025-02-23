import { z } from "zod";

const EventSchema = z.object({
  eventId: z.number().int().positive(),
  type: z.enum(["seminar", "workshop", "other"]),
  name: z.string().min(1),
  desc: z.string().optional(),
  items: z.array(
    z.object({
      name: z.string().min(1),
      description: z.string().min(1),
      price: z.number().positive(),
    })
  ),
});

export default EventSchema;
