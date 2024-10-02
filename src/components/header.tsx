"use client"
import React, { useState } from 'react'
import { Menubar, MenubarMenu } from './ui/menubar'
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  const pathName = usePathname()
  const [activeButton, setActiveButton] = useState(pathName);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    router.push(buttonName)
  };

  return (
    <header className="w-full p-4 flex justify-between">
        <h1>Lathe monitoring</h1>
        <Menubar className="h-12">
          <MenubarMenu>
              <Button 
                variant={activeButton === '/machines' ? 'default' : 'ghost'}
                onClick={() => handleButtonClick('/machines')}
              >
                Máquinas
              </Button>
              <Button 
                variant={activeButton === '/pieces' ? 'default' : 'ghost'}
                onClick={() => handleButtonClick('/pieces')}
              >
                Peças
              </Button>
              <Button
                variant={activeButton === '/maintenances' ? 'default' : 'ghost'}
                onClick={() => handleButtonClick('/maintenances')}
              >
                Manutenções
              </Button>
              <Button 
                variant={activeButton === '/teams' ? 'default' : 'ghost'}
                onClick={() => handleButtonClick('/teams')}              
              >
                Equipes
              </Button>
              <Button
                variant={activeButton === '/dashboard' ? 'default' : 'ghost'}
                onClick={() => handleButtonClick('/dashboard')}
              >
                Dashboard
              </Button>
          </MenubarMenu>
        </Menubar>
    </header>
  )
}
