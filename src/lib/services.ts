import type { ElementType } from 'react';
import {
  FileCheck2,
  Scale,
  Microscope,
  Award,
  BrainCircuit,
  Users,
  Clock,
  CheckCircle,
} from 'lucide-react';

export const serviceIcons = {
  FileCheck2,
  Scale,
  Microscope,
  Award,
  BrainCircuit,
  Users,
  Clock,
  CheckCircle,
};

export type ServiceIconName = keyof typeof serviceIcons;

export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  whatYoullGet: string[];
  idealFor: string[];
  image: string;
  imageHint: string;
  price: number;
  pricePer: string;
  modelSrc?: string;
  examples: {
    title: string;
    image: string;
    hint: string;
  }[];
  secondRowExamples?: {
    title: string;
    image: string;
    hint: string;
  }[];
  keyFeatures: {
    icon: ServiceIconName;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const services: Service[] = [
  {
    slug: 'utility-patent-drawing-services',
    title: 'Utility Patent Drawing Services',
    description: 'Precise and detailed drawings for your utility patent applications.',
    longDescription: "Our Utility Patent Drawing service provides comprehensive illustrations that meet all USPTO, EPO, WIPO, PCT, JPO, CNIPA, and other global patent jurisdiction requirements. We focus on clarity and accuracy to clearly depict your invention's structure, function, and components. From flowcharts to complex mechanical diagrams, we ensure every detail is captured.",
    whatYoullGet: [
        'Compliant Drawings: Utility patent drawings prepared in full accordance with USPTO, EPO, WIPO, CNIPA, PCT and other international patent office standards',
        'Essential Views: Clear representations of the invention showing its structure and functionality (sectional views, exploded views, enlarged views, and other technical perspectives as required)',
        'Detailed Component Representation: Precise illustrations of assemblies, sub-assemblies, and individual parts to highlight how the invention works',
        'Numbering & Reference Indicators: Clean, professional numbering, reference characters, and lead lines to ensure examiners can easily follow and understand the invention',
        'Process & Method Illustrations: Professionally designed flowcharts, block diagrams, and process diagrams for software, business methods, and technical processes',
        'Clarity & Readability: Drawings optimized for clear reproduction in both digital and printed patent documents',
        'Error-Free Output: Carefully reviewed drawings to minimize office action rejections due to drawing-related issues',
    ],
    idealFor: [
        'Inventors & Entrepreneurs with functional innovations',
        'Mechanical Engineers developing new machinery or tools',
        'Software Developers creating technical processes or systems',
        'Medical Device Innovators with new healthcare solutions',
        'Manufacturing Companies with production improvements',
    ],
    image: '/images/utility1.png',
    imageHint: 'utility cover',
    price: 20,
    pricePer: 'drawing',
    examples: [
        {
            title: 'Complex Gear Assembly',
            image: '/images/utility1.png',
            hint: 'gear assembly',
        },
        {
            title: 'Medical Device Cutaway',
            image: '/images/utility2.png',
            hint: 'medical device',
        },
        {
            title: 'Software Flowchart',
            image: '/images/utility3.png',
            hint: 'software flowchart',
        },
        {
            title: 'Circuit Board Schematic',
            image: '/images/design1.png',
            hint: 'circuit schematic',
        },
        {
            title: 'Exploded View of a Motor',
            image: '/images/design2.png',
            hint: 'motor exploded',
        },
        {
            title: 'Hydraulic System Diagram',
            image: '/images/design3.png',
            hint: 'hydraulic diagram',
        },
        {
            title: 'Assembly Drawing',
            image: '/images/technical1.png',
            hint: 'assembly drawing',
        },
        {
            title: 'Biotechnical Process',
            image: '/images/technical2.png',
            hint: 'biotech process',
        },
        {
            title: 'Cross-Section of a Valve',
            image: '/images/utility3.png',
            hint: 'valve cross-section',
        },
        {
            title: 'Communication Network',
            image: '/images/design3.png',
            hint: 'network diagram',
        },
    ],
    keyFeatures: [
      {
        icon: 'FileCheck2',
        title: 'Global Compliance',
        description: 'Drawings are guaranteed to meet the strict guidelines of USPTO, EPO, WIPO, PCT, JPO, CNIPA, and other global patent offices.',
      },
      {
        icon: 'Scale',
        title: 'Unwavering Accuracy',
        description: 'Every component and mechanism is illustrated with meticulous attention to detail.',
      },
      {
        icon: 'Microscope',
        title: 'Clarity in Complexity',
        description: 'We excel at creating clear, easy-to-understand diagrams of even the most complex inventions.',
      },
      {
        icon: 'Award',
        title: 'Professional Quality',
        description: 'High-quality, professional-grade illustrations that strengthen your patent application.',
      },
    ],
    faqs: [
        {
            question: 'What information do I need to provide for a utility patent drawing?',
            answer: 'You should provide detailed descriptions, sketches, photos, 3D models, or any other reference material that explains the invention’s structure, components, and function. The more detail, the better.'
        },
        {
            question: 'How are different parts of the invention shown?',
            answer: 'We use various views (isometric, orthographic, sectional) and clear numbering with lead lines to label each part. This ensures every component referenced in your description is clearly identified in the drawings.'
        },
        {
            question: 'Can you create drawings for software or business methods?',
            answer: 'Yes. For non-tangible inventions, we create flowcharts, block diagrams, and interface mockups that visually represent the process, system architecture, and user experience as required.'
        },
    ]
  },
  {
    slug: 'design-patent-drawing-services',
    title: 'Design Patent Drawing Services',
    description: "Visually stunning illustrations to protect your product's ornamental design.",
    longDescription: "Protect the unique look of your product with our Design Patent Drawing services. We create shaded, line, and perspective drawings that clearly show the ornamental design of your invention. Our illustrations help secure the broadest possible protection for your design.",
    whatYoullGet: [
        'All Required Views: Complete set of orthogonal views (front, rear, left, right, top, and bottom), perspective views, and sectional views (if needed) to fully disclose the design',
        'High-Precision Line Work: Clean, consistent, and professional line drawings that accurately capture the ornamental features of your design',
        'Shading & Surface Treatments: Proper use of surface shading, stippling, and broken lines to distinguish claimed vs. unclaimed portions',
        'International Compliance: Drawings prepared in accordance with USPTO, EPO, CNIPA and WIPO rules to support global design patent filings',
        'Error-Free Submissions: Careful attention to detail to minimize rejections or objections due to drawing inconsistencies',
        'Ready-to-File Quality: Drawings formatted and delivered in patent office–acceptable formats (PDF, VISIO, TIFF, or as required)',
        'Clear Surface Contours: Dash lines, solid lines, and broken lines as per PTO rules',
    ],
    idealFor: [
        'Product Designers creating consumer goods',
        'Fashion Industry professionals with clothing and accessory designs',
        'Electronics Manufacturers with distinctive device aesthetics',
        'Furniture Designers with unique home and office pieces',
        'Automotive Designers with vehicle styling innovations',
    ],
    image: '/images/headset/1.svg',
    imageHint: 'modern product',
    price: 25,
    pricePer: 'drawing',
    examples: [
        {
            title: 'Headset - Angle 1',
            image: '/images/headset/1.svg',
            hint: 'headset angle 1',
        },
        {
            title: 'Headset - Angle 2',
            image: '/images/headset/2.svg',
            hint: 'headset angle 2',
        },
        {
            title: 'Headset - Angle 3',
            image: '/images/headset/3.svg',
            hint: 'headset angle 3',
        },
        {
            title: 'Headset - Angle 4',
            image: '/images/headset/4.svg',
            hint: 'headset angle 4',
        },
        {
            title: 'Headset - Angle 5',
            image: '/images/headset/5.svg',
            hint: 'headset angle 5',
        },
        {
            title: 'Headset - Angle 6',
            image: '/images/headset/6.svg',
            hint: 'headset angle 6',
        },
        {
            title: 'Headset - Angle 7',
            image: '/images/headset/7.svg',
            hint: 'headset angle 7',
        },
        {
            title: 'Headset - Angle 8',
            image: '/images/headset/8.svg',
            hint: 'headset angle 8',
        },
        {
            title: 'Headset - Angle 9',
            image: '/images/headset/9.svg',
            hint: 'headset angle 9',
        },
        {
            title: 'Headset - Angle 10',
            image: '/images/headset/10.svg',
            hint: 'headset angle 10',
        },
    ],
    secondRowExamples: [
        {
            title: "women's wear - Angle 1",
            image: '/images/dress/11.svg',
            hint: "women's wear angle 1",
        },
        {
            title: "women's wear - Angle 2",
            image: '/images/dress/12.svg',
            hint: "women's wear angle 2",
        },
        {
            title: "women's wear - Angle 3",
            image: '/images/dress/13.svg',
            hint: "women's wear angle 3",
        },
        {
            title: "women's wear - Angle 4",
            image: '/images/dress/14.svg',
            hint: "women's wear angle 4",
        },
        {
            title: "women's wear - Angle 5",
            image: '/images/dress/15.svg',
            hint: "women's wear angle 5",
        },
        {
            title: "women's wear - Angle 6",
            image: '/images/dress/16.svg',
            hint: "women's wear angle 6",
        },
        {
            title: "women's wear - Angle 7",
            image: '/images/dress/17.svg',
            hint: "women's wear angle 7",
        },
        {
            title: "women's wear - Angle 8",
            image: '/images/dress/18.svg',
            hint: "women's wear angle 8",
        },
    ],
    keyFeatures: [
      {
        icon: 'FileCheck2',
        title: 'PTO-Specific Views',
        description: 'We provide all seven standard views required for design patents: front, back, top, bottom, left, right, and perspective.',
      },
      {
        icon: 'BrainCircuit',
        title: 'Surface Shading',
        description: 'Our expert illustrators use precise line shading to clearly define the contours and character of your product’s design.',
      },
      {
        icon: 'Microscope',
        title: 'Broken & Solid Lines',
        description: 'We use broken and solid lines to distinguish between the claimed design and its surrounding environment.',
      },
      {
        icon: 'Award',
        title: 'Aesthetic Precision',
        description: 'Our drawings capture the exact ornamental appearance, ensuring your design is protected as broadly as possible.',
      },
    ],
    faqs: [
        {
            question: 'What is the difference between a utility and a design patent drawing?',
            answer: 'Utility patent drawings protect how an invention works or its function. Design patent drawings protect the unique, ornamental, and non-functional visual appearance of a product.'
        },
        {
            question: 'Why are specific views required for design patents?',
            answer: 'Patent offices require a standard set of views (front, back, top, bottom, sides, perspective) to fully and clearly disclose the entire ornamental design from all angles, leaving no room for ambiguity.'
        },
        {
            question: 'Do you offer color patent drawings?',
            answer: 'While most design patents are filed with black and white line drawings, we can provide color drawings upon request. This is typically only necessary if color itself is a claimed feature of the design.'
        },
    ]
  },
  {
    slug: 'technical-patent-drawing-services',
    title: 'Technical Patent Drawing Services',
    description: 'Detailed technical drawings for manufacturing and engineering purposes.',
    longDescription: "Beyond patents, we offer professional engineering drawings (blueprints) for manufacturing and prototyping. Our services include creating detailed schematics, assembly drawings, and component specifications with precise dimensions and tolerances.",
    whatYoullGet: [
        'Manufacturing-Ready Blueprints: Comprehensive technical drawings with precise dimensions, tolerances, and specifications for production',
        'Geometric Dimensioning and Tolerancing (GD&T): Professional dimensioning system ensuring parts fit and function correctly',
        'Multiple View Presentations: Orthographic projections, sectional views, auxiliary views, and detail views as required',
        'Bill of Materials (BOM) Integration: Complete parts lists with specifications, materials, and quantities',
        'Assembly & Exploded Views: Clear illustrations showing how components fit together for manufacturing and assembly',
        'Industry Standard Compliance: Drawings prepared according to ASME Y14.5, ISO 1101, and other international engineering standards',
        'Production-Ready Formats: Delivered in CAD-compatible formats (DWG, DXF, PDF) suitable for CNC programming and manufacturing',
        'Quality Assurance: Thoroughly reviewed drawings to eliminate manufacturing errors and ensure producibility',
    ],
    idealFor: [
        'Manufacturing Engineers requiring production blueprints',
        'Product Development Teams creating prototypes',
        'Startups transitioning from concept to production',
        'Machine Shops requiring precise fabrication drawings',
        'CNC Programmers needing CAD-ready technical drawings',
    ],
    image: '/images/technical2.png',
    imageHint: 'engineering plan',
    price: 34,
    pricePer: 'figure',
    examples: [
        {
            title: 'Blueprint with GD&T',
            image: '/images/technical1.png',
            hint: 'technical blueprint',
        },
        {
            title: 'Exploded View of an Engine',
            image: '/images/technical2.png',
            hint: 'engine exploded',
        },
        {
            title: 'Architectural Plan',
            image: '/images/technical3.png',
            hint: 'architectural plan',
        },
        {
            title: 'Product Assembly Guide',
            image: '/images/technical4.png',
            hint: 'assembly guide',
        },
        {
            title: 'Injection Mold Design',
            image: '/images/technical5.png',
            hint: 'injection mold',
        },
        {
            title: 'PCB Layout',
            image: '/images/technical6.png',
            hint: 'pcb layout',
        },
        {
            title: 'Sheet Metal Fabrication',
            image: '/images/technical7.png',
            hint: 'sheet metal',
        },
        {
            title: 'Mechanical Part Drawing',
            image: '/images/technical8.png',
            hint: 'mechanical part',
        },
        {
            title: 'Electrical Wiring Diagram',
            image: '/images/technical9.png',
            hint: 'wiring diagram',
        },
        {
            title: 'Piping and Instrumentation',
            image: '/images/technical10.png',
            hint: 'piping instrumentation',
        },
    ],
    keyFeatures: [
      {
        icon: 'Scale',
        title: 'Precision Dimensions',
        description: 'Drawings include exact measurements and tolerances required for manufacturing.',
      },
      {
        icon: 'BrainCircuit',
        title: 'Assembly Instructions',
        description: 'Exploded and sectional views make assembly clear and straightforward.',
      },
      {
        icon: 'FileCheck2',
        title: 'Industry Standards',
        description: 'All drawings conform to industry standards like ASME/ISO for universal clarity.',
      },
      {
        icon: 'Users',
        title: 'BOM & Part Lists',
        description: 'We can integrate or create a Bill of Materials (BOM) for complete production planning.',
      },
    ],
    faqs: [
        {
            question: 'Are technical drawings the same as patent drawings?',
            answer: 'No. Patent drawings are for legal protection and follow patent office rules, focusing on showing the invention. Technical drawings (or blueprints) are for manufacturing and include precise dimensions, materials, and tolerances.'
        },
        {
            question: 'What is GD&T and why is it important?',
            answer: 'Geometric Dimensioning and Tolerancing (GD&T) is a symbolic language used on engineering drawings to define the allowable variation of features. It ensures parts fit together and function correctly.'
        },
        {
            question: 'Can you create a technical drawing from a simple sketch?',
            answer: 'Absolutely. We can take your concept sketches, photos, or existing prototypes and turn them into professional, manufacturing-ready technical drawings.'
        },
    ]
  },
];

export const whyChooseUsReasons: { icon: ServiceIconName, text: string }[] = [
  {
    icon: 'Award',
    text: '100% compliant with USPTO, WIPO, EPO, and all global standards'
  },
  {
    icon: 'Clock',
    text: 'Fast turnaround (usually within 24-72 hours)'
  },
  {
    icon: 'CheckCircle',
    text: 'Unlimited revisions at no extra charge'
  },
  {
    icon: 'Users',
    text: 'Reviewed by both technical and legal experts'
  }
];


export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
