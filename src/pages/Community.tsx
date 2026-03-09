import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle, Youtube, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const channels = [
  {
    icon: MessageCircle,
    title: "카카오톡 오픈채팅",
    description: "실시간 Q&A, 전략 공유, 트레이딩 토론",
    action: "참여하기",
    color: "bg-yellow-500/10 text-yellow-500",
    comingSoon: true,
  },
  {
    icon: Youtube,
    title: "유튜브 채널",
    description: "전략 분석, 백테스트 리뷰, MT5 튜토리얼",
    action: "구독하기",
    color: "bg-red-500/10 text-red-500",
    comingSoon: true,
  },
];

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">커뮤니티</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                함께 성장하는 트레이딩 커뮤니티
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                혼자 고민하지 마세요. 같은 길을 가는 트레이더들과 경험을 나눕니다.
              </p>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto space-y-4">
              {channels.map((channel, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-border/50 bg-card/30"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${channel.color}`}>
                      <channel.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1">{channel.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                      {channel.comingSoon ? (
                        <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded">
                          준비중
                        </span>
                      ) : (
                        <Button size="sm" variant="outline">
                          {channel.action}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Notice */}
            <div className="max-w-2xl mx-auto mt-12 p-5 rounded-xl border border-border/50 bg-secondary/20 text-center">
              <p className="text-sm text-muted-foreground">
                커뮤니티 채널은 현재 준비 중입니다.
                <br />
                오픈 시 공지를 통해 안내드리겠습니다.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
