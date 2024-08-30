import ProposalForm from "@/components/form/proposal_form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProposalPage = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"assets/icons/logo-full.svg"}
            alt="Logo"
            width={496}
            height={496}
            className="w-fit mb-12 h-10"
          />
          <ProposalForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Pronto Afeto
            </p>
            <Link href="/admin/login" className="text-purple-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProposalPage;
