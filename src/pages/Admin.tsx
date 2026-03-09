import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { AdminLogin } from '@/components/admin/AdminLogin';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { Shield, Loader2 } from 'lucide-react';

export default function Admin() {
  const { user, loading, isAdmin } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">인증 확인 중...</p>
        </div>
      </div>
    );
  }

  // Not logged in - show login form
  if (!user) {
    return <AdminLogin />;
  }

  // Logged in but not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">접근 권한이 없습니다</h1>
          <p className="text-muted-foreground mb-6">
            이 페이지는 관리자 전용입니다.<br />
            현재 계정: {user.email}
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="text-primary hover:underline"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  // Admin user - show dashboard
  return <AdminDashboard />;
}
