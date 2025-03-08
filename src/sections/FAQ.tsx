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
    <div id="faq" className="bg-gray-50">
      <div className="text-black font1 lg:py-28 md:mx-10 mx-5">
        <div className="lg:flex gap-10 text-foreground">
          <div className="flex flex-col self-center flex-1 lg:mb-0 mb-5 lg:text-left text-center">
            <p className="text-shades font-bold md:text-2xl text-xl">FAQ</p>
            <p className="text-xl md:text-3xl font-bold">
              Punya Pertanyaan Seputar CV Colibri Dannata Success?
            </p>
            <p className="font-light mt-2 text-sm md:text-base">
              Temukan jawaban dari pertanyaan yang sering diajukan langsung di
              sini untuk informasi tentang produk, pemesanan, dan layanan
              konsultasi CV Colibri Dannata Success.
            </p>
          </div>

          <div className="border-2 rounded-lg p-5 border-shades flex-1">
            <div className="flex flex-col gap-5 w-full">
              {faqs.map((faq) => (
                <div key={faq.id} className="group">
                  <label
                    htmlFor={faq.id}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <div className="text-shades font-bold text-sm md:text-lg flex-1">
                      {faq.question}
                    </div>
                    <IconCircleChevronDown className="text-shades transform transition-transform duration-200 group-hover:rotate-180" />
                  </label>
                  <input type="checkbox" id={faq.id} className="hidden peer" />
                  <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40">
                    <p className="font-light pt-2 text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
