import { NextRequest, NextResponse } from "next/server";
import json from "../../../data/timetable.json";

export async function GET(request: NextRequest) {
  return NextResponse.json(json);
}
