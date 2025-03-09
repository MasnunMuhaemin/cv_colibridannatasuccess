import { IconCircleChevronDown } from "@tabler/icons-react";

const FAQ = () => {
  const faqs = [
    {
      id: "faq1",
      question: "Apa itu CV Colibri Dannata Success?",
      answer:
        "CV Colibri Dannata Success adalah perusahaan yang bergerak di bidang atap, menyediakan berbagai jenis atap berkualitas untuk kebutuhan konstruksi Anda.",
    },
    {
      id: "faq2",
      question: "Bagaimana cara memesan produk?",
      answer:
        "Anda dapat melakukan pemesanan melalui WhatsApp dengan menghubungi kami langsung. Informasi kontak tersedia di website kami.",
    },
    {
      id: "faq3",
      question: "Apa saja produk yang tersedia?",
      answer:
        "Kami menyediakan berbagai jenis atap, termasuk atap metal, atap bitumen, dan material atap lainnya yang dapat disesuaikan dengan kebutuhan proyek Anda.",
    },
    {
      id: "faq4",
      question:
        "Apakah CV Colibri Dannata Success memiliki layanan konsultasi?",
      answer:
        "Ya, kami menyediakan layanan konsultasi untuk membantu Anda memilih jenis atap yang sesuai dengan kebutuhan konstruksi Anda.",
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-16 px-5 md:px-10">
      <div className="text-black font1 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Bagian Artikel (Kiri) */}
        <div className="max-w-md">
          <h2 className="text-shades font-bold md:text-2xl text-xl">FAQ</h2>
          <h3 className="text-xl md:text-3xl font-bold">
            Punya Pertanyaan Seputar CV Colibri Dannata Success?
          </h3>
          <p className="font-light mt-2 text-sm md:text-base">
            Temukan jawaban dari pertanyaan yang sering diajukan langsung di
            sini untuk informasi tentang produk, pemesanan, dan layanan
            konsultasi.
          </p>
        </div>

        {/* Bagian Pertanyaan (Kanan) */}
        <div className="border-2 rounded-lg p-5 border-shades">
          <div className="flex flex-col gap-5 w-full">
            {faqs.map((faq) => (
              <article
                key={faq.id}
                className="group border-b last:border-b-0 pb-3"
              >
                <details className="cursor-pointer">
                  <summary className="flex justify-between items-center text-shades font-bold text-sm md:text-lg">
                    {faq.question}
                    <IconCircleChevronDown className="text-shades transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="font-light pt-2 text-sm md:text-base">
                    {faq.answer}
                  </p>
                </details>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
