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
        path: '/overview',
        icon: <Home className='Icons' fontSize="small" />,
        chip: '',
        children:  ''
      },
      {
        title: 'Analítica',
        path: '/analytics',
        icon: <ChartBar className='Icons' fontSize="small" />,
        chip: '',
        children:  ''
      },
      {
        title: 'Logistica',
        path: '/logistics',
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
        path: '/customers',
        icon: <Man className='Icons' fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '/customers',
            chip: '',
            children:  ''
          },
          {
            title: 'Details',
            path: '/customers/1',
            chip: '',
            children:  ''
          },
          {
            title: 'Edit',
            path: '/customers/1/edit',
            chip: '',
            children:  ''
          }
        ],
        chip: ''
      },
      {
        title: 'Productos',
        path: '/products',
        icon: <ShoppingBag className='Icons' fontSize="small" />,
        children: [
          {
            title: 'List',
            path: '/products',
            chip: '',
            children:  ''
          },
          {
            title: 'Create',
            path: '/products/new',
            chip: '',
            children:  ''
          }
        ],
        chip: ''
      },
      {
        title: 'Pedidos',
        icon: <ShoppingCart className='Icons' fontSize="small" />,
        path: '/orders',
        children: [
          {
            title: 'List',
            path: '/orders',
            chip: '',
            children:  ''
          },
          {
            title: 'Details',
            path: '/orders/1',
            chip: '',
            children:  ''
          }
        ],
        chip: ''
      },
      {
        title: 'Facturas',
        path: '/invoices',
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
            path: '/invoices/1',
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