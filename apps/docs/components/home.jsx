import { Button } from '@openui-org/react'
import Link from 'next/link'
import {
  buttonPresentationMap,
  descriptionMap,
  titleMap,
} from '../i18n/translate'
import useLocalesMap from './use-locales'

export default function Home() {
  const title = useLocalesMap(titleMap)
  const description = useLocalesMap(descriptionMap)
  const buttonPresentation = useLocalesMap(buttonPresentationMap)

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <h1 className="text-3xl font-bold tracking-tighter">{title}</h1>
            <p className="max-w-[600px] text-sm">{description}</p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/docs/introduction">{buttonPresentation}</Link>
              </Button>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            height="550"
            src="https://i.postimg.cc/X7yfn8hW/logo.png"
            width="550"
          />
        </div>
      </div>
    </section>
  )
}