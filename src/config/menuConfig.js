import { ContactsOutlined, CalendarOutlined, AlipayCircleOutlined, HomeOutlined } from '@ant-design/icons';
const menuList = [
    {
        title: '首页',
        icon: <HomeOutlined />,
        path: '/home'
    },
    {
        title: '商品',
        path: '/products',
        icon: <AlipayCircleOutlined />,
        children: [
            {
                title: '品类管理',
                icon: <ContactsOutlined />,
                path: '/category'
            },
            {
                title: '商品管理',
                icon: <CalendarOutlined />,
                path: '/product'
            }
        ]
    },
]
export default menuList