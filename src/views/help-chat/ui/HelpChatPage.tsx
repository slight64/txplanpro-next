import { Card, CardContent } from "@/shared/ui/card";
import { ChatInput } from "@/features/chat/ui/chat-input";
import { CONTACT_INFO } from "@/shared/config";
import FacebookIcon from "@/shared/assets/icons/social/FacebookIcon";
import InstagramIcon from "@/shared/assets/icons/social/InstagramIcon";

export const HelpChatPage = () => {
  return (
    <Card className="py-6 px-3 self-stretch w-full bg-card-background-light rounded-2xl shadow-button-shadow flex">
      <CardContent className="flex items-start justify-between ">
        <section className="flex flex-col py-3 px-4 items-start gap-6 flex-1 grow">
          <h2 className="w-fit  text-x1-black text-[length:var(--m3-display-small-font-size)] tracking-[var(--m3-display-small-letter-spacing)] leading-[var(--m3-display-small-line-height)] [font-style:var(--m3-display-small-font-style)]">
            Contacts
          </h2>

          <div className="inline-flex flex-col items-start gap-1.5">
            <h3 className="w-fit font-[number:var(--m3-title-large-font-weight)] text-x1-black text-[length:var(--m3-title-large-font-size)] tracking-[var(--m3-title-large-letter-spacing)] leading-[var(--m3-title-large-line-height)] [font-style:var(--m3-title-large-font-style)]">
              Address
            </h3>
            <address className="w-fit font-[number:var(--m3-title-medium-font-weight)] text-x1-black not-italic">
              {CONTACT_INFO.address}
            </address>
          </div>

          <div className="inline-flex flex-col items-start gap-1.5">
            <div className="w-fit font-[number:var(--m3-title-medium-font-weight)] text-x1-black">
              Email: {CONTACT_INFO.email}
            </div>
            <div className="w-fit font-[number:var(--m3-title-medium-font-weight)] text-x1-black">
              Tel: {CONTACT_INFO.phone}
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-1.5">
            <h3 className="w-fit font-[number:var(--m3-title-medium-font-weight)] text-x1-black">
              Social Media
            </h3>
            <div className="inline-flex items-start gap-1.5">
              <InstagramIcon className="cursor-pointer" />
              <FacebookIcon className="cursor-pointer" />
            </div>
          </div>
        </section>

        <ChatInput className="w-[500px] h-[324px]" />
      </CardContent>
    </Card>
  );
};
