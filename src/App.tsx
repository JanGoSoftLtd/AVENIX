import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'

const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const ProductsPage = lazy(() => import('@/pages/ProductsPage'))
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage'))
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'))
const InsightsPage = lazy(() => import('@/pages/InsightsPage'))
const ArticlePage = lazy(() => import('@/pages/ArticlePage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="insights/:slug" element={<ArticlePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
