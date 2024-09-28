import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../layout/wrapper/MasterRocker.vue')
    },

    {
        path: "/admin/danh-muc",
        component: () => import("../components/DanhMuc/index.vue")
    },

    {
        path: "/admin/su-dung-dich-vu",
        component: () => import("../components/SuDungDichVu/index.vue")
    },

    {
        path: "/admin/hoa-don-ban-hang",
        component: () => import("../components/HoaDonBanHang/index.vue")
    
    },
    {
        path: "/admin/chuc-vu",
        component: () => import("../components/ChucVu/index.vue")
        
    },
    {
        path: "/admin/nhan-vien",
        component: () => import("../components/NhanVien/index.vue")
        
    },
    {
        path: "/admin/ban",
        component: () => import("../components/Ban/index.vue"),
        
    },
    {
        path: "/admin/khu-vuc",
        component: () => import("../components/KhuVuc/index.vue"),
        
    },
    {
        path: "/admin/nguyen-lieu",
        component: () => import("../components/NguyenLieu/index.vue"),
       
    },
    {
        path: "/admin/nhap-kho",
        component: () => import("../components/NhapKho/index.vue"),
        
    },
    {
        path: "/admin/hoa-don-nhap-kho",
        component: () => import("../components/HoaDonNhapKho/index.vue"),
        
    },
    {
        path: "/admin/mon-an",
        component: () => import("../components/MonAn/index.vue"),
       
    },
    {
        path: "/admin/nha-cung-cap",
        component: () => import("../components/NhaCungCap/index.vue"),
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router