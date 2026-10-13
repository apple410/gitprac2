import { NextResponse } from "next/server";
const datas = [
  {
    name: "Alex Johnson",
    city: "New York",
  },
  {
    name: "Sophia Chen",
    city: "Tokyo",
  },
  {
    name: "Liam Smith",
    city: "London",
  },
  {
    name: "Emma Garcia",
    city: "Barcelona",
  },
  {
    name: "Aarav Sharma",
    city: "Kathmandu",
  },
];

export function GET(request) {
  return NextResponse.json({ datas, message: "success", status: 200 });
}
