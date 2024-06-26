import React from 'react'
import PropTypes from 'prop-types'

import { CBadge } from '@coreui/react'
import { Link } from '@inertiajs/react';

export const AppSidebarNav = ({ items }) => {

    const location = "";
    const navLink = (name, icon, badge) => {
        return (
            <>
                {icon && icon}
                {name && name}
                {badge && (
                    <CBadge color={badge.color} className="ms-auto">
                        {badge.text}
                    </CBadge>
                )}
            </>
        )
    }

    const navItem = (item, index) => {
        const { component, name, badge, icon, ...rest } = item
        const Component = component

        return (
            <Component
                {...(rest.to &&
                    !rest.items && {
                    component: Link,
                })}
                key={index}
                {...rest}
            >
                {navLink(name, icon, badge)}
            </Component>
        )
    }
    const navGroup = (item, index) => {
        const { component, name, icon, to, ...rest } = item
        const Component = component

        return (
            <Component
                idx={String(index)}
                key={index}
                toggler={navLink(name, icon)}
                visible={location.pathname?.startsWith(to)}
                {...rest}
            >
                {item.items?.map((item, index) =>
                    item.items ? navGroup(item, index) : navItem(item, index),
                )}
            </Component>
        )
    }

    return (
        <React.Fragment>

            {items &&
                items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
        </React.Fragment>
    )
}

AppSidebarNav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
