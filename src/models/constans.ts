export interface INavLinks {
  id: string;
  title: string;
}

export interface IServices {
  title: string;
  icon: string;
}

export interface ITechnologies {
  name: string;
  icon: string;
}

export interface IExperiences {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface ITestimonials {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface IProjects {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
}
