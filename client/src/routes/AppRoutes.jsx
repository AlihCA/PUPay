import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";

import Landing from "../pages/auth/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Unauthorized from "../pages/auth/Unauthorized";
import AuthRedirect from "../pages/auth/AuthRedirect";
import VerifyStudent from "../pages/student/VerifyStudent";

import AdminDashboard from "../pages/admin/Dashboard";
import AdminCollections from "../pages/admin/Collections";
import AdminPayments from "../pages/admin/Payments";
import AdminStudents from "../pages/admin/Students";
import AdminAnnouncements from "../pages/admin/Announcements";
import AdminAIHelper from "../pages/admin/AIHelper";
import AdminSettings from "../pages/admin/Settings";

import StudentDashboard from "../pages/student/Dashboard";
import StudentCollections from "../pages/student/MyCollections";
import StudentPayments from "../pages/student/MyPayments";
import StudentAnnouncements from "../pages/student/Announcements";
import StudentProfile from "../pages/student/Profile";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/register/*" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/auth/redirect" element={<AuthRedirect />} />
      <Route path="/student/verify" element={<VerifyStudent />} />

      {/* Admin Pages */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout>
              <AdminDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/collections"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout>
              <AdminCollections />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/payments"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout>
              <AdminPayments />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/students"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout>
              <AdminStudents />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/announcements"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout>
              <AdminAnnouncements />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/ai-helper"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout>
              <AdminAIHelper />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout>
              <AdminSettings />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* Student Pages */}
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <DashboardLayout>
              <StudentDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/collections"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <DashboardLayout>
              <StudentCollections />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/payments"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <DashboardLayout>
              <StudentPayments />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/announcements"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <DashboardLayout>
              <StudentAnnouncements />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/profile"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <DashboardLayout>
              <StudentProfile />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;