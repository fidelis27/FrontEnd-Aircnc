import React from 'react'
import {BrowserRouter,Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import New from './pages/New'
import Book from './pages/user/Book'
import List from './pages/user/List'
import LoginUser from './pages/user/Login'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route  path="/dashboard" component={Dashboard} />
                <Route  path="/new" component={New} />

                {/* rotas user */}
                <Route  path="/book/:id" component={Book} />
                <Route  path="/list" component={List} />
                <Route  path="/login-user" component={LoginUser} />
            </Switch>
        </BrowserRouter>
    )
}