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
    image: '/images/utility/utility_1.1.svg',
    imageHint: 'utility cover',
    price: 20,
    pricePer: 'drawing',
    examples: [
        {
            title: 'Sample',
            image: '/images/utility/utility_1.1.svg',
            hint: 'gear assembly',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_1.2.svg',
            hint: 'medical device',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_1.3.svg',
            hint: 'software flowchart',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_1.4.svg',
            hint: 'software flowchart',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_1.5.svg',
            hint: 'software flowchart',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_1.6.svg',
            hint: 'software flowchart',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_1.7.svg',
            hint: 'software flowchart',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_1.8.svg',
            hint: 'software flowchart',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_1.9.svg',
            hint: 'software flowchart',
        },
    ],
    secondRowExamples: [
        {
            title: 'Sample',
            image: '/images/utility/utility_2.1.svg',
            hint: 'mechanical component',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.2.svg',
            hint: 'technical diagram',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.3.svg',
            hint: 'assembly view',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.4.svg',
            hint: 'system overview',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.5.svg',
            hint: 'process flow',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.6.svg',
            hint: 'detailed view',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.7.svg',
            hint: 'cross section',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.8.svg',
            hint: 'exploded view',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.9.svg',
            hint: 'schematic diagram',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.10.svg',
            hint: 'component layout',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.11.svg',
            hint: 'functional diagram',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.12.svg',
            hint: 'structural view',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.13.svg',
            hint: 'operational flow',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.14.svg',
            hint: 'design specification',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.15.svg',
            hint: 'technical blueprint',
        },
        {
            title: 'Sample',
            image: '/images/utility/utility_2.16.svg',
            hint: 'gear assembly alt',
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
            title: 'Sample',
            image: '/images/headset/1.svg',
            hint: 'headset angle 1',
        },
        {
            title: 'Sample',
            image: '/images/headset/2.svg',
            hint: 'headset angle 2',
        },
        {
            title: 'Sample',
            image: '/images/headset/3.svg',
            hint: 'headset angle 3',
        },
        {
            title: 'Sample',
            image: '/images/headset/4.svg',
            hint: 'headset angle 4',
        },
        {
            title: 'Sample',
            image: '/images/headset/5.svg',
            hint: 'headset angle 5',
        },
        {
            title: 'Sample',
            image: '/images/headset/6.svg',
            hint: 'headset angle 6',
        },
        {
            title: 'Sample',
            image: '/images/headset/7.svg',
            hint: 'headset angle 7',
        },
        {
            title: 'Sample',
            image: '/images/headset/8.svg',
            hint: 'headset angle 8',
        },
        {
            title: 'Sample',
            image: '/images/headset/9.svg',
            hint: 'headset angle 9',
        },
        {
            title: 'Sample',
            image: '/images/headset/10.svg',
            hint: 'headset angle 10',
        },
    ],
    secondRowExamples: [
        {
            title: "Sample",
            image: '/images/dress/1.svg',
            hint: "women's wear angle 1",
        },
        {
            title: "Sample",
            image: '/images/dress/2.svg',
            hint: "women's wear angle 2",
        },
        {
            title: "Sample",
            image: '/images/dress/3.svg',
            hint: "women's wear angle 3",
        },
        {
            title: "Sample",
            image: '/images/dress/4.svg',
            hint: "women's wear angle 4",
        },
        {
            title: "Sample",
            image: '/images/dress/5.svg',
            hint: "women's wear angle 5",
        },
        {
            title: "Sample",
            image: '/images/dress/6.svg',
            hint: "women's wear angle 6",
        },
        {
            title: "Sample",
            image: '/images/dress/7.svg',
            hint: "women's wear angle 7",
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
    slug: 'trademark-patent-drawing-services',
    title: 'Trademark Patent Drawing Services',
    description: 'Professional trademark illustrations and visual representations for brand protection.',
    longDescription: "Protect your brand identity with our specialized Trademark Drawing services. We create precise, clear illustrations of logos, symbols, word marks, and design marks that meet all USPTO and international trademark office requirements. Our trademark drawings help ensure your brand receives the strongest possible legal protection.",
    whatYoullGet: [
        'USPTO Compliant Drawings: Trademark illustrations prepared in strict accordance with USPTO TMEP guidelines and international trademark office standards',
        'Multiple Format Options: Clean black and white line drawings, stylized representations, and color specimens as required by trademark law',
        'Word Mark Visualizations: Professional typography and lettering for distinctive word marks and stylized text',
        'Design Mark Illustrations: Precise reproductions of logos, symbols, emblems, and graphic design elements',
        'Specimen Preparations: Proper formatting of trademark drawings for use-in-commerce evidence and registration applications',
        'International Compliance: Drawings prepared for Madrid Protocol filings and global trademark protection strategies',
        'Digital Vector Formats: Scalable illustrations delivered in trademark office-acceptable formats (EPS, PDF, SVG)',
        'Revision Support: Multiple rounds of refinement to ensure perfect representation of your brand elements',
    ],
    idealFor: [
        'Entrepreneurs launching new brands and logos',
        'Small Businesses protecting their brand identity',
        'Marketing Agencies filing trademark applications for clients',
        'Legal Professionals requiring precise trademark documentation',
        'E-commerce Companies securing online brand protection',
    ],
    image: '/images/trademark/trademark.png',
    imageHint: 'trademark symbol',
    price: 25,
    pricePer: 'mark',
    examples: [],
    keyFeatures: [
      {
        icon: 'Scale',
        title: 'Legal Precision',
        description: 'Drawings meet exact trademark office specifications for successful registration.',
      },
      {
        icon: 'Award',
        title: 'Brand Protection',
        description: 'Professional illustrations that strengthen your trademark application and brand defense.',
      },
      {
        icon: 'FileCheck2',
        title: 'Global Standards',
        description: 'Compliant with USPTO, EUIPO, WIPO and international trademark office requirements.',
      },
      {
        icon: 'Users',
        title: 'Multi-Format Delivery',
        description: 'Receive your trademark drawings in all required formats for various filing needs.',
      },
    ],
    faqs: [
        {
            question: 'What is the difference between trademark drawings and regular logo design?',
            answer: 'Trademark drawings are legal documents that must meet specific government standards for clarity, format, and presentation. They are used for official trademark registration, unlike regular marketing logos.'
        },
        {
            question: 'Do I need different drawings for word marks vs. design marks?',
            answer: 'Yes. Word marks require specific typography representations, while design marks need precise illustrations of logos or symbols. We create the appropriate drawing type based on your trademark application needs.'
        },
        {
            question: 'Can you help with international trademark filings?',
            answer: 'Absolutely. Our trademark drawings are prepared to meet international standards and can be used for Madrid Protocol filings and applications in multiple countries.'
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
