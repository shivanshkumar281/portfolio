import { motion } from "motion/react";
import { useEffect } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  // Lock background page scroll while the modal is open, and close on Escape.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        className="relative flex flex-col w-full border shadow-sm max-w-2xl max-h-[90vh] rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute z-20 p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="" />
        </button>
        <div className="overflow-y-auto rounded-2xl overscroll-contain">
          <img src={image} alt={title} className="w-full rounded-t-2xl" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
            <p className="mb-3 font-normal text-neutral-400">{description}</p>
            {subDescription.map((subDesc, index) => (
              <p key={index} className="mb-3 font-normal text-neutral-400">
                {subDesc}
              </p>
            ))}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-3">
                {tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                ))}
              </div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
              >
                View Project{" "}
                <img src="assets/arrow-up.svg" className="size-4" alt="" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
