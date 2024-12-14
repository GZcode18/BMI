'use client'
import Link from "next/link";
import { Button, Card, CardTitle, Col, FormGroup, Input, Label, Row } from "reactstrap";
import Image from "next/image";
import firstbg from "/public/images/background/firstbg.png";
import bgBawah from "/public/images/bg/bg-bawah.png";
import Header from "./layouts/header/Header";
import secondbg from "/public/images/background/secondbg.png";
import { useState } from "react";
import bgThird from "/public/images/background/bgThird.png";
// import bulatGiant from "/public/images/bg/bulatGiant.png";


export default function Home() {
  const [tinggi, setTinggi] = useState("");
  const [berat, setBerat] = useState("");
  const [hasilBMI, setHasilBMI] = useState(null);
  const [kategori, setKategori] = useState("");

  // Fungsi untuk menghitung BMI
  const hitungBMI = () => {
    if (tinggi && berat) {
      const tinggiMeter = tinggi / 100; // Konversi tinggi dari cm ke meter
      const tinggiKuadrat = tinggiMeter * tinggiMeter; // Tinggi dalam meter kuadrat
      const bmi = berat / tinggiKuadrat; // Rumus BMI

      setHasilBMI(bmi.toFixed(1));

      if (bmi < 17.0) setKategori("Underweight");
      else if (bmi >= 17.0 && bmi < 18.4) setKategori("Underweight2");
      else if (bmi >= 18.5 && bmi < 25.0) setKategori("Normal");
      else if (bmi >= 25,1 && bmi < 27.0) setKategori("Overweight");
      else setKategori("Obesitas");
    } else {
      alert("Mohon masukkan tinggi dan berat badan yang valid!");
    }
  };

  return (
    <>
      <Header status={"BeforeAuth"} />
      <div className="homeUser w-100 bg-white">

        <section className="first w-100">
          <Row className="h-100 mt-5 mt-lg-auto">
            <Col lg='6' sm='12' className="d-flex h-100 justify-content-center flex-column gap-5 px-3 px-lg-5 mb-4 mb-lg-0">
              <section className="mb-5 ps-0 text-lg-start text-center">
                <h1 className="fw-bolder">Kalkulator BMI</h1>
                <b>Body Mass Index (BMI) atau Indeks Massa Tubuh (IMT) merupakan berat badan yang dihitung dengan satuan kilogram atau pon dibagi dengan kuadrat dari tinggi badan dengan satuan meter atau kaki.</b>
              </section>
              <section className="text-center text-lg-start">
                <Link href="#kalkulator">
                  <Button className="btn-primer1">Coba Kalkulator</Button>
                </Link>
              </section>
            </Col>
            <Col lg='6' sm='12' className="d-flex h-100 justify-content-center align-items-center">
              <Image className="fisrtImg" src={firstbg} width={'100%'} height={'100%'} alt="secondbg" />
            </Col>
          </Row>
          <Image className="bgBawah" src={bgBawah} width={'100%'} height={'100%'} alt="secondbg" />
        </section>

        <section className="second bg-primer-light px-5" id="manfaat">
          <h1 className="text-center text-primer fw-bold mt-4">Manfaat Menghitung BMI</h1>
          <p className="w-75 text-center mx-auto text-second w-sm-100">Setelah mengetahui bagaimana cara menghitung BMI, selanjutnya kategori ideal atau tidaknya ditentukan pada klasifikasi IMT (BMI). Berikut ini merupakan klasifikasi BMI yang perlu Anda ketahui.</p>
          <div className="d-flex flex-column justify-content-between py-5">
            <Row>
              <Col lg='5' md='6' sm='12' xs='12'>
                <Image className="secondimg" src={secondbg} width={'100%'} height={'100%'} alt="secondbg" />
              </Col>
              <Col lg='7' md='6' sm='12' xs='12' className="pt-3 ps-0">
                <ul>
                  <li>Mengetahui nilai indeks dari berat badan, apakah termasuk normal atau tidak.</li>
                  <li>Membantu Anda untuk memantau perkembangan berat badan secara berkala. Ini akan berdampak pada kemampuan untuk merencanakan pola hidup yang sesuai untuk terus berada di angka indeks normal.</li>
                  <li>Upaya untuk menjaga nilai indeks BMI juga secara langsung mampu membantu Anda dalam menjaga kesehatan tubuh. Tidak baik untuk terlalu kurus ataupun terlalu gemuk, guna menurunkan resiko penyakit</li>
                  <li>BMI juga bermanfaat untuk membuat Anda terhindar dari obesitas. Mengapa? Ketika mengetahui penilaian indeks BMI, maka secara otomatis dapat membantu Anda menyusun pola makan yang tepat agar tidak mengalami obesitas.</li>
                </ul>
              </Col>
            </Row>
          </div>
        </section>

        <section className="third" id="kalkulator" style={{ height: '100vh' }}>
          <Row className="h-100">
            <Col lg='6' md='12' sm='12' xs='12' className="text-center h-100 text-white colum" style={{ background: 'linear-gradient(90deg, #9425B4 18.62%, #B466CB 90.32%)' }}>
              <span>
                <h1 className="text-white">Kalkulator BMI</h1>
                <p>Dengan menggunakan kalkulator BMI (Body Mass Index), Anda dapat lebih memahami apakah berat badan termasuk kategori ideal atau tidak.</p>
              </span>
              <div className="text-start my-5">
                <FormGroup>
                  <Label for="tinggi">Masukkan Tinggi Badan Anda (cm)</Label>
                  <Input
                    id="tinggi"
                    name="tinggi"
                    type="number"
                    value={tinggi}
                    onChange={(e) => setTinggi(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="berat">Masukkan Berat Badan Anda (kg)</Label>
                  <Input
                    id="berat"
                    name="berat"
                    type="number"
                    value={berat}
                    onChange={(e) => setBerat(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="jk">Jenis kelamin</Label>
                  <Input type="select" name="jk">
                    <option>--Pilih Jenis Kelamin--</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </Input>
                </FormGroup>
              </div>
              <Link href="#hasil">
                <Button onClick={hitungBMI}>Hitung</Button>
              </Link>
            </Col>
            <Col lg='6' md='12' sm='12' xs='12' className="h-100 text-center colum" id="hasil">
              <h1 className="text-primer fw-bolder">Hasil</h1>
              <div className="mt-5 pt-5">

                {hasilBMI ? (
                  <Card className="text-start mx-0 mx-lg-4 mb-5">
                    <CardTitle className="fs-5">
                      Hasil kalkulasi anda: <span className="text-primer fw-semibold">{hasilBMI}</span> <br />
                      Anda tergolong
                      {kategori === "Underweight" && (
                        <span><span className="text-danger fw-semibold"> {kategori} </span> atau kekurangan berat badan tingkat berat</span>
                      )}
                      {kategori === "Underweight2" &&
                        <span><span className="text-warning fw-semibold"> {kategori} </span> kekurangan berat badan tingkat ringan</span>}
                      {kategori === "Normal" &&
                        <span><span className="text-success fw-semibold"> {kategori} </span> berat badan ideal</span>}
                      {kategori === "Overweight" &&
                        <span> <span className="text-warning fw-semibold"> {kategori} </span> atau kelebihan berat badan tingkat ringan</span>}
                      {kategori === "Obesitas" &&
                        <span> <span className="text-danger fw-semibold"> {kategori} </span> atau kelebihan berat badan tingkat berat</span>}
                    </CardTitle>
                    {kategori === "Underweight" && (
                      <p>Perbanyak asupan kalori harian anda, serta imbangi dengan olahraga rutin.</p>
                    )}
                    {kategori === "Underweight2" && (
                      <p>Perbanyak asupan kalori harian anda, serta imbangi dengan olahraga rutin.</p>
                    )}
                    {kategori === "Normal" && <p>Selamat! Berat badan anda dalam kategori ideal.</p>}
                    {kategori === "Overweight" && <p>Perbanyak olahraga dan atur pola makan sehat.</p>}
                    {kategori === "Obesitas" && <p>Konsultasikan dengan dokter untuk penanganan yang tepat.</p>}
                  </Card>
                ) : (
                  <p className="text-muted">Masukkan data dan hitung untuk melihat hasil.</p>
                )}
              </div>
              <Image className="" src={bgThird} width={'100%'} height={'100%'} alt="elips" />
            </Col>
          </Row>
        </section>

        <section className="second bg-primer-light position-relative px-5" id="klasifikasi">
          <h1 className="text-center text-second fw-bold mt-4">Klasifikasi IMT (BMI)</h1>
          <p className="w-75 text-center mx-auto text-second w-sm-100">Setelah mengetahui bagaimana cara menghitung BMI, selanjutnya kategori ideal atau tidaknya ditentukan pada klasifikasi IMT (BMI). Berikut ini merupakan klasifikasi BMI yang perlu Anda ketahui.</p>
          <Card className="w-75 w-sm-100 mx-auto p-5 rounded-4 fourP">
            <div>
              <span>
                <h5>Hasil BMI</h5>
              </span>
              <section>
                <h5>Status</h5>
              </section>
            </div>
            <div>
              <span>
                <p>Dibawah 17</p>
              </span>
              <section>
                <p><span className="fw-semibold text-danger">Underweight</span> atau kekurangan berat badan tingkat berat</p>
              </section>
            </div>
            <div>
              <span>
              <p>Diantara 17,0 - 18,4</p>
              </span>
              <section>
                <p><span className="fw-semibold text-warning">Underweight</span> kekurangan berat badan tingkat ringan</p>
              </section>
            </div>
            <div>
              <span>
                <p>Diantara 18,5 - 25,0</p>
              </span>
              <section>
                <p><span className="fw-semibold text-success">Normal</span> berat badan ideal</p>
              </section>
            </div>
            <div>
              <span>
                <p>Diantara 25,1 - 27,0</p>
              </span>
              <section>
                <p><span className="fw-semibold text-warning">Overweight</span> atau kelebihan berat badan tingkat ringan</p>
              </section>
            </div>
            <div>
              <span>
                <p>Diatas 27,0</p>
              </span>
              <section>
                <p><span className="fw-semibold text-danger">Obesitas</span> atau kelebihan berat badan tingkat berat</p>
              </section>
            </div>
            {/* <div className="w-30">
                <h5>Hasil BMI</h5>
                <p>Dibawah 17</p>
                <p>Diantara 17,0 - 18,4</p>
                <p>Diantara 18,5 - 25,0</p>
                <p>Diantara 25,1 - 27,0</p>
                <p>Diatas 27,0</p>
              </div>
              <div className="w-80">
                <h5>Status</h5>
                <p><span className="fw-semibold text-danger">Underweight</span> atau kekurangan berat badan tingkat berat</p>
                <p><span className="fw-semibold text-warning">Underweight</span> kekurangan berat badan tingkat ringan</p>
                <p><span className="fw-semibold text-success">Normal</span> berat badan ideal</p>
                <p><span className="fw-semibold text-danger">Overweight</span> atau kelebihan berat badan tingkat ringan</p>
                <p><span className="fw-semibold text-warning">Obesitas</span> atau kelebihan berat badan tingkat berat</p>
              </div> */}
          </Card >
        </section >
        {/* <Footer /> */}
      </div >
    </>
  );
}