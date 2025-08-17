import React, { useState, useEffect, useRef } from "react";

interface Card {
  id: number;
  title: string;
  description: string;
  tags: string[];
  lastUpdated: string;
}

interface CardSliderProps {
  data?: Card[];
}

const CardSlider: React.FC<CardSliderProps> = ({ data = [] }) => {
  const defaultData: Card[] = [
    {
      id: 1,
      title: "POINT OF SALE (POS)",
      description:
        "A scalable POS system enabling real-time transactions, inventory control, and sales analytics for modern retail businesses.",
      tags: ["#ERP", "#CMS", "#Mobile"],
      lastUpdated: "Aug 6, 2025",
    },
    {
      id: 2,
      title: "INVENTORY MANAGEMENT",
      description:
        "Advanced inventory tracking system with real-time stock monitoring, automated reordering, and comprehensive analytics.",
      tags: ["#Inventory", "#Analytics", "#Automation"],
      lastUpdated: "Aug 7, 2025",
    },
    {
      id: 3,
      title: "CUSTOMER RELATIONSHIP",
      description:
        "Complete CRM solution for managing customer data, interactions, and building long-term relationships.",
      tags: ["#CRM", "#Customer", "#Analytics"],
      lastUpdated: "Aug 8, 2025",
    },
    {
      id: 4,
      title: "FINANCIAL DASHBOARD",
      description:
        "Comprehensive financial reporting and analytics dashboard with real-time insights and forecasting capabilities.",
      tags: ["#Finance", "#Reports", "#Dashboard"],
      lastUpdated: "Aug 9, 2025",
    },
    {
      id: 5,
      title: "E-COMMERCE PLATFORM",
      description:
        "Full-featured e-commerce solution with multi-channel selling, payment processing, and order management.",
      tags: ["#E-commerce", "#Online", "#Payments"],
      lastUpdated: "Aug 10, 2025",
    },
    {
      id: 6,
      title: "WAREHOUSE MANAGEMENT",
      description:
        "Complete warehouse operations management with tracking, optimization, and automated workflows for efficiency.",
      tags: ["#Warehouse", "#Logistics", "#Automation"],
      lastUpdated: "Aug 11, 2025",
    },
  ];

  const posData = data.length > 0 ? data : defaultData;
  const [currentIndex, setCurrentIndex] = useState(posData.length); // mulai dari clone pertama
  const sliderRef = useRef<HTMLDivElement>(null);
  const visibleCount = 3; // jumlah kartu yang terlihat: kiri, tengah, kanan
  const cardWidth = 256; // lebar w-64
  const gap = 12; // gap antar kartu
  const totalWidth = cardWidth + gap;

  // Clone 2 kartu: [last-1, last] + [all] + [first, first+1]
  const extendedData = [
    ...posData.slice(-2), // 2 kartu terakhir sebagai clone di depan
    ...posData,
    ...posData.slice(0, 2), // 2 kartu pertama sebagai clone di belakang
  ];

  // Hitung posisi translateX agar kartu aktif di tengah
  const translateX =
    -currentIndex * totalWidth + (visibleCount / 2) * totalWidth - gap / 2;

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;

        // Jika mencapai akhir dari data asli + clone
        if (next >= posData.length + posData.length) {
          // Lompat ke posisi clone awal tanpa animasi
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = "none";
              setCurrentIndex(posData.length); // kembali ke posisi awal (tengah data asli)
              // Kembalikan transisi setelah reposition
              setTimeout(() => {
                if (sliderRef.current) {
                  sliderRef.current.style.transition =
                    "transform 0.5s ease-in-out";
                }
              }, 50);
            }
          }, 500);
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [posData.length]);

  // Handle klik dot atau kartu
  const goToSlide = (index: number) => {
    const actualIndex = index + 2; // karena extendedData punya 2 clone di depan
    setCurrentIndex(actualIndex);

    // Jika klik ke ujung (kartu terakhir dari data asli)
    if (index === posData.length - 1) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
          setCurrentIndex(posData.length); // kembali ke posisi tengah
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = "transform 0.5s ease-in-out";
            }
          }, 50);
        }
      }, 500);
    }
  };

  // Set transisi awal
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, []);

  return (
    <div className="w-full py-8 overflow-hidden">
      {/* Slider Container */}
      <div className="flex justify-center">
        <div
          className="relative overflow-hidden"
          style={{
            width: `${visibleCount * totalWidth - gap}px`,
            height: "320px",
          }}
        >
          {/* Track */}
          <div
            ref={sliderRef}
            className="flex"
            style={{
              transform: `translateX(${translateX}px)`,
              gap: `${gap}px`,
              padding: "0 10px",
            }}
          >
            {extendedData.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="flex-shrink-0 w-64 h-80 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl shadow-md border border-gray-300 p-5 cursor-pointer hover:shadow-lg transition-shadow"
                style={{ height: "300px" }}
                onClick={() =>
                  goToSlide((index - 2 + posData.length) % posData.length)
                }
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <div className="w-4 h-4 text-gray-600">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-bold text-gray-800 mb-3 leading-tight text-base">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                  {card.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {card.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-gray-300 text-gray-700 rounded-full font-medium text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-gray-500 text-xs mt-auto">
                  {card.lastUpdated}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {posData.map((_, index) => {
          const activeIndex =
            (currentIndex - 2 + posData.length) % posData.length;
          return (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400`}
              style={{
                backgroundColor: index === activeIndex ? "#1f2937" : "#d1d5db",
                width: index === activeIndex ? "16px" : "8px",
              }}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardSlider;
