import React, { useState } from 'react'
import Card from '../../components/Card'
import { Drawer } from 'antd';
import { ReactComponent as Logo } from '../../images/logo.svg'
import { ReactComponent as Profile } from '../../images/profile.svg'
import { ReactComponent as Orders } from '../../images/orders.svg'
import { ReactComponent as Cart } from '../../images/cart.svg'
import { HomeFilled } from '@ant-design/icons'
import './dashboard.css'

const Dashboard = () => {
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);
      };

      const onClose = () => {
        setOpen(false);
      };
    console.log(open, 'open')
    const sideLinks = [
        {
            id: 1,
            icon: <HomeFilled />,
            name: 'Dashboard'
        },
        {
            id: 2,
            icon: <Profile />,
            name: 'Your Profile',
        },
        {
            id: 3,
            icon: <Orders />,
            name: 'Orders',
            number: true,

        },
        {
            id: 4,
            icon: <Cart />,
            name: 'Your Cart',
            number: true,
        }
    ]
    return (
       <>
       <Drawer placement="right" onClose={onClose} open={open} >
        <p>Welcome</p>
       </Drawer>
         <div style={{display: 'flex'}}>
            <div className='Sider'>
                <div className='LogoWrapper'>
                    <Logo />
                    <h2 className="Title">
                        Lilies
                    </h2>
                </div>
                <div className='SideLinksWrapper'>
                    {sideLinks.map(link => (
                        <div className='SiderLinks' key={link.id}>
                            {link.icon}
                            <p>{link.name}</p>
                            {link?.number && '6'}
                        </div>
                    ))}
                </div>
            </div>
            <div onClick={showDrawer}>
                <Card />
            </div>
        </div>
       </>
    )
}

export default Dashboard