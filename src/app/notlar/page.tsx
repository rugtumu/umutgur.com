import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";
import { NOTES_DATA } from "@/data/notlar-data";
import Link from "next/link";
import { useState, useEffect } from "react";

export const metadata: Metadata = {
  title: "Yazılar",
  description: "Enstantane yazılar.",
};

export default function NotesPage() {
  return (
    <div className="container relative mx-auto scroll-my-12 overflow-auto p-8 md:p-16">
      <section className="mx-auto w-full max-w-full space-y-8 bg-white">
        <h1 className="text-2xl font-bold">Yazılar</h1>
        {NOTES_DATA.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <h2 className="text-xl font-semibold">
                {note.videoUrl ? (
                    <Link href={note.videoUrl} target="_blank" rel="noopener noreferrer" className="hover:underline hover:bg-gray-200 hover:w-64 hover:rounded-lg">
                        {note.title}
                    </Link>
                ) : (
                    note.title
                )}
              </h2>
              <p className="text-sm text-muted-foreground">{note.date}</p>
            </CardHeader>
            <CardContent>
                {note.points && note.points.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {note.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                ) : (
                    <p></p>
                )}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
