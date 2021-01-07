import * as axios from 'axios'
import { connect } from 'react-redux'

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            "API-KEY": "91de1025-3294-43dd-9cf3-1f44d12a746a"
        }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
            response => {
                console.log(response)
                return response.data
            })
    },
    followUser(userId) {
        return instance.post("/follow/"+userId, null)
    },
    unfollowUser(userId) {
        return instance.delete("/follow/"+userId, null)
    }
}

export const profileAPI = {
    getProfile(userId) {
        (userId === undefined) && (userId=2)
        return instance.get("profile/"+userId).then(response => response.data)
    },
    getPosts() {
        return instance.get("profile/")
        
    },
    getStatus(userId) {
        (userId === undefined) && (userId=2)
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get("auth/me").then(response => response.data)
    },
    login(data) {
        return instance.post(`auth/login`, {email: data.email, password: data.password, rememberMe: data.rememberMe}).then(response => {
            return response.data})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}