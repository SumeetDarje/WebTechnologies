"use client";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define Zod schema
const EventSchema = z.object({
  eventId: z.number().int().positive({ message: "Event ID must be a positive integer" }),
  type: z.enum(["seminar", "workshop", "other"], { required_error: "Type is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  desc: z.string().optional(),
  items: z.array(
    z.object({
      name: z.string().min(1, { message: "Item name is required" }),
      description: z.string().min(1, { message: "Item description is required" }),
      price: z.number().positive({ message: "Price must be a positive number" }),
    })
  ),
});

export default function CreateEvent() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      eventId: 1,
      type: "seminar",
      name: "",
      desc: "",
      items: [{ name: "", description: "", price: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
    localStorage.setItem("eventData", JSON.stringify(data));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className=" font-bold mb-4 rounded-3 ">Create Event</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label>Event ID:</label>
          <input type="number" {...register("eventId", { valueAsNumber: true })} className="border p-2 w-full" />
          {errors.eventId && <p className="text-red-500 text-sm">{errors.eventId.message}</p>}
        </div>

        <div className="mb-4">
          <label>Type:</label>
          <select {...register("type")} className="border p-2 w-full text-white">
            <option className="bg-secondary text-white" value="seminar">Seminar</option>
            <option className="bg-secondary text-white" value="workshop">Workshop</option>
            <option className="bg-secondary text-white" value="other">Other</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
        </div>

        <div className="mb-4">
          <label>Name:</label>
          <input type="text" {...register("name")} className="border p-2 w-full" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label>Description:</label>
          <textarea {...register("desc")} className="border p-2 w-full" />
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Items</h2>
          {fields.map((field, index) => (
            <div key={field.id} className="border p-4 mb-2">
              <input type="text" {...register(`items.${index}.name`)} className="border p-2 w-full" placeholder="Item Name" />
              <input type="text" {...register(`items.${index}.description`)} className="border p-2 w-full mt-2" placeholder="Item Description" />
              <input type="number" {...register(`items.${index}.price`, { valueAsNumber: true })} className="border p-2 w-full mt-2" placeholder="Price" />
              <button type="button" onClick={() => remove(index)} className="bg-red-500 rounded text-white px-2 py-1 mt-2">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => append({ name: "", description: "", price: 0 })} className="bg-blue-500 text-white px-4 py-2 rounded">Add Item</button>
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
