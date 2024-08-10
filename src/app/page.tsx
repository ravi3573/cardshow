import Image from 'next/image';
import img1 from '../../public/img1.jpg';
import img2 from '../../public/img2.jpg';
import img3 from '../../public/img3.jpg';
import img4 from '../../public/img4.jpg';
import img5 from '../../public/img5.jpg';
import img6 from '../../public/img6.jpg';

const courses = [
  { image: img1, id: 1, title: 'Guitar Fundamentals', slug: 'guitar-fundamentals', description: "Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course. Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course.", price: 99.99, instructor: 'John Doe' },
  { image: img2, id: 2, title: 'Guitar Fundamentals', slug: 'guitar-fundamentals', description: "Learn the basics of playing guitar with our comprehensive beginner's courseLearn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course.", price: 99.99, instructor: 'John Doe' },
  { image: img3, id: 3, title: 'Guitar Fundamentals', slug: 'guitar-fundamentals', description: "Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course.", price: 99.99, instructor: 'John Doe' },
  { image: img4, id: 4, title: 'Guitar Fundamentals', slug: 'guitar-fundamentals', description: "Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course.", price: 99.99, instructor: 'John Doe' },
  { image: img5, id: 5, title: 'Guitar Fundamentals', slug: 'guitar-fundamentals', description: "Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course.", price: 99.99, instructor: 'John Doe' },
  { image: img6, id: 6, title: 'Guitar Fundamentals', slug: 'guitar-fundamentals', description: "Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course .", price: 99.99, instructor: 'John Doe' },
  { image: img1, id: 7, title: 'Guitar Fundamentals', slug: 'guitar-fundamentals', description: "Learn the basics of playing guitar with our comprehensive beginner's course. Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course", price: 99.99, instructor: 'John Doe' },
  { image: img2, id: 8, title: 'Guitar Fundamentals', slug: 'guitar-fundamentals', description: "Learn the basics of playing guitar with our comprehensive beginner's course. Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course", price: 99.99, instructor: 'John Doe' },
  { image: img3, id: 9, title: 'Guitar Fundamentals', slug: 'guitar-fundamentals', description: "Learn the basics of playing guitar with our comprehensive beginner's course.Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course ", price: 99.99, instructor: 'John Doe' },
  { image: img4, id: 10, title: 'Guitar Fundamentals', slug: 'guitar-fundamentals', description: "Learn the basics of playing guitar with our comprehensive beginner's course. Learn the basics of playing guitar with our comprehensive beginner's course Learn the basics of playing guitar with our comprehensive beginner's course", price: 99.99, instructor: 'John Doe' },
];

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center bg-tahiti-400">
        {courses.map((el) => (
          <div className="bg-[#334155] p-4 overflow-y-auto box-border  h-80 border-4 sm:flex flex-col md:flex-row lg:flex-row" key={el.id}>
            <div className="relative w-full md:w-1/2 lg:w-1/2 h-48 mb-2 lg:mb-0 md:sticky top-0 lg:sticky top-0">
              <Image className="object-fit " src={el.image} alt={el.title} layout="fill" />
            </div>
            <div className="object-fit md:w-1/2 lg:w-1/2 flex flex-col lg:justify-start p-4 lg:py-120">
              <p className="text-sky-500 text-xl font-bold text-start">{el.title}</p>
              <p className="text-sm text-start">{el.description}</p>
              <p className="text-red-400 text-xl font-bold text-start">{el.price}</p>
              <p className="text-lime-600 text-start text-lg">{el.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
