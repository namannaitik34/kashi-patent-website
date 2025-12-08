
import { getServiceBySlug, services, type Service } from '@/lib/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServicePageClient from './ServicePageClient';

type ServicePageProps = {
  // use a permissive params type to satisfy Next's PageProps constraint
  params: any;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Kashi Patent`,
    description: service.longDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex((s) => s.slug === resolvedParams.slug);
  const prevService = services[currentIndex - 1] ?? services[services.length - 1];
  const nextService = services[currentIndex + 1] ?? services[0];


  return <ServicePageClient service={service} prevSlug={prevService.slug} nextSlug={nextService.slug} prevService={prevService} nextService={nextService} />;
}
