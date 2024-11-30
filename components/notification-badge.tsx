"use client"

export function NotificationBadge({ count }: { count: number }) {
    if (count === 0) return null;
    
    return (
      <div className="absolute -top-2 -right-2 bg-orange-400 text-white text-[10px] min-w-[16px] h-4 rounded-full flex items-center justify-center px-1">
        {count > 99 ? '99+' : count}
      </div>
    )
  }