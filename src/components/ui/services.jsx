import { toaster } from "../ui/toaster";

export function TampilPesan(judul, pesan) {
    return toaster.create({
        title: judul,
        description: pesan,
        duration: 1000,
    })
}