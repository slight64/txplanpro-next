import { Card, CardContent } from "@/shared/ui/card";
import { ChatInput } from "@/features/chat/ui/chat-input";
import FacebookIcon from "@/shared/assets/icons/social/FacebookIcon";
import InstagramIcon from "@/shared/assets/icons/social/InstagramIcon";

export const CONTACT_INFO = {
  address: "129 - 131 Mar St London E8 3RH",
  email: "info@txplanpro.pro",
  phone: "(+44)123456789",
} as const;

export const HelpChatPage = () => {
  return (
    <Card className="py-6 px-3 self-stretch w-full bg-card-background-light rounded-2xl shadow-button-shadow flex">
      <CardContent className="flex items-start justify-between ">
        <section className="py-2 px-4">
          <h2 className="text-36">Contacts</h2>

          <div>
            <h3 className="text-22 mt-4">Address</h3>
            <address className="not-italic font-medium">
              {CONTACT_INFO.address}
            </address>
          </div>

          <div className="mt-7">
            <div className="font-[number:var(--m3-title-medium-font-weight)]">
              Email: {CONTACT_INFO.email}
            </div>
            <div className="mt-1 font-[number:var(--m3-title-medium-font-weight)]">
              Tel: {CONTACT_INFO.phone}
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-1.5">
            <h3 className="mt-6 font-[number:var(--m3-title-medium-font-weight)]">
              Social Media
            </h3>
            <div className="flex items-start gap-1.5">
              <InstagramIcon
                className="cursor-pointer w-8 h-8"
                variant="dark"
              />
              <FacebookIcon className="cursor-pointer w-8 h-8" variant="dark" />
            </div>
          </div>
        </section>

        <ChatInput className="w-[500px] h-[324px]" />
      </CardContent>
    </Card>
  );
};
