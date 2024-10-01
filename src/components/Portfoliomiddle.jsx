
import React from 'react';

const PortfolioItem = ({ title, description, image, link }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-[#141b1b] mb-2">{title}</h2>
      <p className="text-sm sm:text-md text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#4f4bb3] text-white px-4 py-2 rounded-full text-sm sm:text-base hover:bg-[#3f3b93] transition-colors duration-300"
      >
        Learn More
      </a>
    </div>
  </div>
);

export function Portfoliomiddle() {
    const portfolioItems = [
        {
          title: "E-Commerce Growth Strategy",
          description: "Developed an optimized sales funnel that boosted conversion rates by 25% for an e-commerce startup.",
          image: "https://imgs.search.brave.com/IzzE79kAb35mFeDYT4OdGhfI5Yk5n7g3EahJXW0t_5o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC93b3dneDA1/eHNkcnIvN2Q5anQ3/Q1BvSGtFcmt3QjAy/dUNGNC85YTUyN2Yx/NzIyMWYxYjFhODUw/MTBhMDE4NGZhMWU1/OS9lY29tbWVyY2Vf/d2Vic2l0ZV8yLmpw/ZWc_Zm09d2VicCZ3/PTM4NDAmcT03NQ",
          link: "https://www.shopify.com/",
        },
        {
          title: "Social Media Marketing Automation",
          description: "Built a platform to automate content scheduling and analytics tracking for social media managers.",
          image: "https://media.sproutsocial.com/uploads/PI_Publishing_Calendar_Week_View_Compose_Approve_Hover.png",
          link: "https://hootsuite.com/",
        },
        {
          title: "Business Analytics Dashboard",
          description: "Designed a custom dashboard to visualize key business metrics for a financial services company.",
          image: "https://imgs.search.brave.com/AdJnr9dQ5I5NTqx9PQphJN7e3kStx3GY3LoxezQ6pnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMua2xpcGZvbGlv/LmNvbS93ZWJzaXRl/L3B1YmxpYy8wNjVk/YTUyMi0wZDM5LTQz/YWEtODAzMy0xYTJk/MmZiYWJjN2Qvc2Fh/cyUyMGRhc2hib2Fy/ZCUyMGV4YW1wbGUu/cG5n",
          link: "https://datastudio.google.com/",
        },
        {
          title: "AI-Powered Lead Generation",
          description: "Created an AI solution to automatically generate and qualify leads, improving sales outreach by 40%.",
          image: "https://imgs.search.brave.com/csmaNIgyDRVdHBz4gGiDsrM2yYTb-bsUr1YkchmIVBI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXNt/ZS5jby9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA0/LzE4LTIucG5n",
          link: "https://www.leadfeeder.com/",
        },
        {
          title: "Custom CRM System",
          description: "Developed a CRM solution for a real estate agency, streamlining customer management and boosting sales.",
          image: "https://imgs.search.brave.com/7kkRcqEA10k37_RYja0Dzw2oJRng_KPnWqEcOYZcMeE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9pUVhGb3d0N3dD/QjJIVU0zcExOQ1B2/OTBHc0k9LzB4MDox/MzAweDEzMDAvZml0/LWluLzUwMHg1MDAv/OTlkZXNpZ25zLWNv/bnRlc3RzLWF0dGFj/aG1lbnRzLzIxLzIx/NTI2L2F0dGFjaG1l/bnRfMjE1MjY0ODA",
          link: "https://www.hubspot.com/products/crm",
        },
        {
          title: "Mobile App Development",
          description: "Built a cross-platform mobile app that allowed users to manage business finances on the go.",
          image: "https://imgs.search.brave.com/V2JZjVoI3pjPvCPYaSg17yKIzh_KZyBv6L-69cfHmbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb2Jp/cmlzZS5jb20vYXNz/ZXRzMjQvaW1hZ2Vz/L3RlbXBsYXRlMDA0/LmpwZw",
          link: "https://www.reactnative.com/",
        },
        {
          title: "Retail Inventory Management",
          description: "Created an inventory management system for a retail chain, reducing stock discrepancies by 35%.",
          image: "https://imgs.search.brave.com/C_-DWSQEDo4EsjQ5QbvutWjR39adumvgrDpqxszd84Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzYwM2ZiYjY1/MDE4NGEwNmIyNjhj/ZTA4Yi82MGE5ZTQ5/M2MxM2I5NjZmNTcz/Njc5ZTJfSW52ZW50/b3J5TWdtdC5wbmc",
          link: "https://www.tradegecko.com/inventory-management-software",
        },
        {
          title: "Customer Feedback Portal",
          description: "Developed a customer feedback platform that helped a SaaS company improve customer retention by 20%.",
          image: "https://imgs.search.brave.com/OF9zyTBNx8WuHwmSgHKJDghR8ZtgGBFXlkuBirEivRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5tb3Bpbmlvbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMDcvMjgwOTA3/MTgvU2FiZXIucG5n",
          link: "https://www.getfeedback.com/",
        },
        {
          title: "Sales Forecasting Tool",
          description: "Implemented a predictive sales forecasting tool using machine learning for a logistics company.",
          image: "https://imgs.search.brave.com/duL2jVJ_wQi0g--kW2CywEMGC9eysCPj-jP9FBBhdGo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lYW9n/Mm5rcWNrcC5leGFj/dGRuLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wMy9B/bmFwbGFuLVNhbGVz/LUZvcmVjYXN0aW5n/LVNvZnR3YXJlLndl/YnA_c3RyaXA9YWxs/Jmxvc3N5PTEmdz0x/OTIwJnNzbD0x",
          link: "https://www.ibm.com/analytics/sales-forecasting",
        },
        {
          title: "Business Process Automation",
          description: "Automated repetitive business processes for a legal firm, saving over 200 hours of manual work per month.",
          image: "https://imgs.search.brave.com/xPhhDEQWPGDDahM9LDzMxRt7wM507SAnE2qtYronVYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlj/a3VwLmNvbS9ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA0L2ltYWdlMi0y/LnBuZw",
          link: "https://www.uipath.com/solutions/robotic-process-automation",
        },
      ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#141b1b] mb-8 sm:mb-12">
        Our Work
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}