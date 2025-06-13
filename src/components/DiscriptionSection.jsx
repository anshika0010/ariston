import React from "react";

const DescriptionSection = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg border border-gray-200 max-w-5xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C58] mb-4 border-b border-[#0b0c58] pb-2">
        Description
      </h2>

      {/* Paragraph */}
      <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-6">
        The applications and fundamentals of conducting polymers (CPs) give a
        conversant overview of front-line advancements in nanocomposites
        originated from conjugated polymeric matrices. Conducting polymers are
        widely studied due to their magnificent properties, which include its
        high mechanical strength, optical behavior, and tunable electrical
        properties. Moreover, the refined fabrication, effortless synthesis,
        high environmental stability over predictable inorganic materials, and
        further physical properties of the conducting polymer-based
        nanocomposites are directed to high-yielding materials and advance
        devices and applications. This book mainly focused on the Bio-Medical
        and Energy storing applications of conducting polymers, along with
        these, we try to give an insight on the fabrication of nanocomposite
        based on CPs. The book has compiled the information about, the
        applications of imprinted conductive polymer materials such as
        Polypyrrole (PPy), Polyaniline (PANI), PEDOT, and their trends in
        conducting polymer-based gas sensor research, highlighting features,
        uses, and obstacles in future of sensing research in a variety of
        applications. This book aims to explore fundamentals, principles,
        concepts, and applications of conducting polymers. This book results
        from commitments by leading researchers in the field with diverse
        backgrounds and aptitudes. This book targets material scientists,
        polymer industrial experts, R&D of wearable electronics researchers, as
        well as university professors, graduates, and academicians who are
        currently working in the field of polymers, advanced electronics,
        mechanical engineering, chemical technology, biomedicine, material
        sciences, advanced sciences, flexible energy storages, and renewable
        energies.
      </p>

      {/* Button */}
      <button className="text-[#0b0c58] text-sm md:text-base font-semibold border border-[#0b0c58] rounded-full px-6 py-2 hover:bg-[#1D29F2] hover:text-white transition">
        FREE PPT with purchase.
      </button>
    </div>
  );
};

export default DescriptionSection;
