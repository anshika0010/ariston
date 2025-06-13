"use client";
import Image from "next/image";
import image from "../../src/images/Image19..jpg";

export default function Editors() {
  const editors = [
    {
      name: "Dr. Mohd Imran Ahamed",
      image: image,
      department: "Department of Chemistry, Faculty of Science,",
      university: "Aligarh Muslim University, Aligarh, 202002 India",
      bio: "Dr. Mohd Imran Ahamed is a research associate in the Department of Chemistry, Faculty of Science, Aligarh Muslim University, Aligarh, and he has received his Ph.D. in Analytical Chemistry from Aligarh Muslim University, India. His research interest is in the field of organic cation-exchangers and their analytical applications from Aligarh Muslim University, India. It was he who pioneered the development in the field of Chemistry more specifically, Material Science and Separation Science by using a variety of ion-exchange resins (IER). He has published more than fifteen research articles in international journals and authored book chapters in the books published by renowned international publishers. He has edited more than forty books by publishing houses like Elsevier, Springer, Taylor & Francis, CRC Press Taylor & Francis, etc. He is the member of various editorial boards of the journals.",
    },
    {
      name: "Dr. Ishtaiq M. Khan",
      image: image,
      department: "Department of Chemistry, Faculty of Science,",
      university: "Aligarh Muslim University, Aligarh, 202002 India",
      bio: "Dr. Ishtaiq M. Khan is working as associate professor at the Department of Chemistry, Aligarh Muslim University Aligarh, India. He obtained his B.Sc. in Chemistry (Hons), M.Sc. in Physical chemistry and passed several courses in computer science. Then, he received his Doctor of Philosophy degree in chemistry from the same university in 2000. He is engaged in active research of Molecular Spectral Investigations and Crystallographic Studies of Novel CT complexes in solutions and solids. He has been teaching Physical Chemistry to the students of undergraduate and post-graduate level (Department of Chemistry, AMU, Aligarh India).",
    },
    {
      name: "Nimra Shakeel",
      image: image,
      department: "Department of Chemistry, Faculty of Science,",
      university: "Aligarh Muslim University, Aligarh, 202002 India",
      bio: "Nimra Shakeel is a young researcher in the Department of Chemistry, Faculty of Science, Aligarh Muslim University, Aligarh. She has recently submitted her Ph.D. thesis on the topic 'Studies on the development and application of nanomaterials in microbial biofuel cell'. She was awarded by Maulana Azad National Fellowship Award. Additionally, she received the Young Scientist Fellowship (SRF) directly from the Council of Scientific and Industrial Research (CSIR). After that, she received a grant for a project on nanomaterials for miniaturized devices from biological source to biofuel. She has also synthesized and characterized new nanomaterials for anode material. She has also synthesized various nanomaterials using green routes and has been working in this area. She has published many research articles in international journals in her core research area with good impact factors in Science field.",
    },
    {
      name: "Dr. Hassan Algadi",
      image: image,
      department: "Department of Electrical Engineering, College",
      university: "of Engineering, Najran University, Saudi Arabia",
      bio: "Dr. Hassan Algadi completed his Bachelor and Master's degrees from King Saud University and Northumbria University of Technology in 2004 and 2010, respectively, in Electrical Engineering (Communication). Later, he received his Ph.D. degree, Najran University as Lecturer in Electrical Engineering. Dr. Algadi completed his Ph.D. degree in 2015 from Newcastle University, UK. Currently, Dr. Algadi is working as an Assistant Professor at the Department of Electrical Engineering, College of Engineering, Najran University, Saudi Arabia. He is also working as a senior researcher at the Center for Advanced Materials and Nano-Research, Najran the Center for Advanced Materials and Nano-Research. He is specialized in Nanotechnology, Sensors and Nano-Biology related research. He has published many research articles in the reputed journals. His H-index is 8 and has received more than thousands of Citations on his research.",
    },
  ];

  return (
    <div className="min-h-screen mx-12 bg-white text-black">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0B0C58] p-4 md:p-6">
        Editors
      </h1>
      <div className="w-full h-0.5 bg-gray-400"></div>

      <div className="flex flex-col gap-4 p-4">
        {editors.map((editor, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-200 p-3 border border-gray-400 md:p-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-300">
                  <Image
                    src={editor.image || "/placeholder.svg"}
                    alt={editor.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-lg md:text-xl font-bold text-[#0B0C58] px-2">
                  {editor.name}
                </h1>
                <div className="text-[#0B0C58] text-sm md:text-base">
                  <p>{editor.department}</p>
                  <p>{editor.university}</p>
                </div>

                <div className="mt-2 text-xs md:text-base">
                  <p>{editor.bio}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
