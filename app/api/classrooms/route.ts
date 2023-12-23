import { NextRequest, NextResponse } from "next/server";
import json from "../../../data/classrooms.json";

export async function GET(request: NextRequest) {
  return NextResponse.json(json);
}
