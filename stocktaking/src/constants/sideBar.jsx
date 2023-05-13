import Cash  from '@mui/icons-material/Money';
import ChartBar from '@mui/icons-material/BarChart';
import Home from '@mui/icons-material/Home';
import ReceiptTax from '@mui/icons-material/Receipt';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Truck from '@mui/icons-material/FireTruck';
import Man from '@mui/icons-material/Man';
import '../styles/App.css'

export const Sections = [
  {
    title: 'GENERAL',
    items: [
      {
        title: 'Descripción General',
        path: '/dashboard',
        icon: <Home className='Icons' fontSize="small" />,
        chip: '',
        children:  ''
      },
      {
        title: 'Analítica',
        path: '/dashboard/analytics',
        icon: <ChartBar className='Icons' fontSize="small" />,
        chip: '',
        children:  ''
      },
      {
        title: 'Logistica',
        path: '/dashboard/logistics',
        icon: <Truck className='Icons' fontSize="small" />,
        chip: 'Nuevo',
        children:  ''
      },
    ]
  },
  {
    title: 'GESTIÓN',
    items: [
      {
        title: 'Clientes',
        path: '/dashboard/customers',
        icon: <Man className='Icons' fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '/dashboard/customers',
            chip: '',
            children:  ''
          },
          {
            title: 'Details',
            path: '/dashboard/customers/1',
            chip: '',
            children:  ''
          },
          {
            title: 'Edit',
            path: '/dashboard/customers/1/edit',
            chip: '',
            children:  ''
          }
        ],
        chip: ''
      },
      {
        title: 'Productos',
        path: '/dashboard/products',
        icon: <ShoppingBag className='Icons' fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '/dashboard/products',
            chip: '',
            children:  ''
          },
          {
            title: 'Create',
            path: '/dashboard/products/new',
            chip: '',
            children:  ''
          }
        ],
        chip: ''
      },
      {
        title: 'Pedidos',
        icon: <ShoppingCart className='Icons' fontSize="small" />,
        path: '/dashboard/orders',
        children: [
          {
            title: 'List',
            path: '/dashboard/orders',
            chip: '',
            children:  ''
          },
          {
            title: 'Details',
            path: '/dashboard/orders/1',
            chip: '',
            children:  ''
          }
        ],
        chip: ''
      },
      {
        title: 'Facturas',
        path: '/dashboard/invoices',
        icon: <ReceiptTax className='Icons' fontSize="small" />,
        chip: '',
        children: [
          {
            title: 'List',
            path: '/dashboard/invoices',
            chip: '',
            children:  ''
          },
          {
            title: 'Details',
            path: '/dashboard/invoices/1',
            chip: '',
            children:  ''
          }
        ]
      },
      {
        title: 'Checkout',
        path: '/checkout',
        icon: <Cash className='Icons' fontSize="small" />,
        chip: '',
        children:  ''
      },
    ]
  },

]