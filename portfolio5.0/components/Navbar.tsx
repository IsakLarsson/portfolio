import { Container, HStack, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Router } from 'next/router'
import React, { ReactNode } from 'react'

const FONT_SIZE = 'l'

interface NavItemProps {
    href: string
    currentPath: string
    children: ReactNode
}
const NavItem: React.FC<NavItemProps> = ({ href, currentPath, children }) => {
    const active = href == currentPath
    return (
        <Link
            color={active ? 'tomato' : 'whitesmoke'}
            as={NextLink}
            href={href}
        >
            <Text fontWeight={active ? 'bold' : 'normal'}>{children}</Text>
        </Link>
    )
}

interface Props {
    router: Router
}
const Navbar: React.FC<Props> = ({ router }) => {
    return (
        <Container maxW={'2xl'}>
            <HStack
                mb={'2rem'}
                borderBottom={'1px'}
                css={'backdrop-filter: blur(2px)'}
                // position="fixed"
                zIndex={2}
                as={'nav'}
            >
                <Text fontSize={'3xl'}>Isak Larsson</Text>
                <NavItem currentPath={router.pathname} href="/">
                    Home
                </NavItem>
                <NavItem currentPath={router.pathname} href="/projects">
                    Projects
                </NavItem>
            </HStack>
        </Container>
    )
}

export default Navbar