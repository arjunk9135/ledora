// app/(root)/payment-transfer/loading.tsx
export default function Loading() {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500" />
      </div>
    );
  }
  