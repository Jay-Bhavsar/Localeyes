'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

export default function DefaultSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
         
          
          <Sidebar.Item
            href=""
            icon={HiUser}
          >
            <p>
             AMRRI PORTAL
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/published"
            icon={HiShoppingBag}
          >
            <p>
              Published Researches
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/review"
            icon={HiArrowSmRight}
          >
            <p>
              Researches in Review
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/rejected"
            icon={HiTable}
          >
            <p>
             Rejected Research
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/user"
            icon={HiTable}
          >
            <p>
             Portal
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


