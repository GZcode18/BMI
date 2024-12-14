import Head from "next/head";
import "@/styles/style.scss";
// import { AuthProvider } from "../../public/AuthContext";
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <Head>
        <title>Kalkulator BMI | Hitung Indeks Massa Tubuh</title>
        <meta name="description" content="Gunakan Kalkulator BMI untuk menghitung indeks massa tubuh Anda dan mengetahui kategori berat badan ideal Anda. Cek kesehatan Anda sekarang!" />
        <meta name="keywords" content="Kalkulator BMI, Body Mass Index, Hitung Berat Badan, Berat Badan Ideal, Kesehatan, BMI Online" />
        <meta name="author" content="Nama Anda" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Kalkulator BMI | Hitung Berat Badan Ideal" />
        <meta property="og:description" content="Cek kategori berat badan ideal Anda dengan Kalkulator BMI. Mudah, cepat, dan akurat." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.domain-anda.com" />
        <meta property="og:image" content="/images/thumbnail.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.domain-anda.com" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
      </Head>
      <body>
        {/* <AuthProvider> */}
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          defer
        ></script>
        {/* </AuthProvider> */}
      </body>
    </html>
  )
}
