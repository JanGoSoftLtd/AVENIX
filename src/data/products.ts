import { ShoppingCart, Boxes, Users, Wallet, BarChart3, type LucideIcon } from 'lucide-react'

export const proManager = {
  name: 'ProManager',
  tagline: 'Smart Business Management. Complete Control.',
  description: 'ProManager is an integrated shop management and POS platform designed to simplify everyday business operations.',
  features: [
    { title: 'Sales Management', icon: ShoppingCart, text: 'Fast point-of-sale checkout, invoices and sales history in one place.' },
    { title: 'Inventory Management', icon: Boxes, text: 'Track stock levels, purchases and product details so you always know what you hold.' },
    { title: 'Customer & Supplier Management', icon: Users, text: 'Keep customer and supplier records, balances and history organised.' },
    { title: 'Expense & Financial Tracking', icon: Wallet, text: 'Record expenses and follow income and outgoings clearly.' },
    { title: 'Analytics & Reporting', icon: BarChart3, text: 'Reports that turn daily activity into insight for better decisions.' },
  ] as { title: string; icon: LucideIcon; text: string }[],
}
