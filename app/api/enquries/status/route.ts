import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const { id, status } = await request.json();


  const { error } = await supabase
    .from("farmer_enquiries")
    .update({
      status: status,
    })
    .eq("id", id);


  if (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }


  return NextResponse.json({
    success: true,
  });

}