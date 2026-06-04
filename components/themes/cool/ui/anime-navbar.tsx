// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import type { LucideIcon } from "lucide-react"
// import { cn } from "@/lib/utils"

// interface NavItem {
//   name: string
//   url: string
//   icon: LucideIcon
// }

// interface NavBarProps {
//   items: NavItem[]
//   className?: string
//   defaultActive?: string
// }

// export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
//   const [mounted, setMounted] = useState(false)
//   const [hoveredTab, setHoveredTab] = useState<string | null>(null)
//   const [activeTab, setActiveTab] = useState<string>(defaultActive)
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   if (!mounted) return null

//   return (
//     <div className="fixed top-5 left-0 right-0 z-[9999]">
//       <div className="flex justify-center pt-6">
//         <motion.div
//           className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{
//             type: "spring",
//             stiffness: 260,
//             damping: 20,
//           }}
//         >
//           {items.map((item) => {
//             const Icon = item.icon
//             const isActive = activeTab === item.name
//             const isHovered = hoveredTab === item.name

//             return (
//               <a
//                 key={item.name}
//                 href={item.url}
//                 onClick={(e) => {
//                   e.preventDefault()
//                   setActiveTab(item.name)
//                 }}
//                 onMouseEnter={() => setHoveredTab(item.name)}
//                 onMouseLeave={() => setHoveredTab(null)}
//                 className={cn(
//                   "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
//                   "text-white/70 hover:text-white",
//                   isActive && "text-white"
//                 )}
//               >
//                 {isActive && (
//                   <motion.div
//                     className="absolute inset-0 rounded-full -z-10 overflow-hidden"
//                     initial={{ opacity: 0 }}
//                     animate={{
//                       opacity: [0.3, 0.5, 0.3],
//                       scale: [1, 1.03, 1]
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }}
//                   >
//                     <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
//                     <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
//                     <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
//                     <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />

//                     <div
//                       className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
//                       style={{
//                         animation: "shine 3s ease-in-out infinite"
//                       }}
//                     />
//                   </motion.div>
//                 )}

//                 <motion.span
//                   className="hidden md:inline relative z-10"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {item.name}
//                 </motion.span>
//                 <motion.span
//                   className="md:hidden relative z-10"
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <Icon size={18} strokeWidth={2.5} />
//                 </motion.span>

//                 <AnimatePresence>
//                   {isHovered && !isActive && (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.8 }}
//                       className="absolute inset-0 bg-white/10 rounded-full -z-10"
//                     />
//                   )}
//                 </AnimatePresence>

//                 {isActive && (
//                   <motion.div
//                     layoutId="anime-mascot"
//                     className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none"
//                     initial={false}
//                     transition={{
//                       type: "spring",
//                       stiffness: 300,
//                       damping: 30,
//                     }}
//                   >
//                     <div className="relative w-12 h-12">
//                       {/* === START OF CORRECTED CHANGE === */}
//                       {/* This is the new heart mascot body */}
//                       <motion.span
//                         className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl" // Adjust font size as needed
//                         animate={
//                           hoveredTab ? {
//                             scale: [1, 1.1, 1],
//                             rotate: [0, -5, 5, 0],
//                             transition: {
//                               duration: 0.5,
//                               ease: "easeInOut"
//                             }
//                           } : {
//                             y: [0, -3, 0],
//                             transition: {
//                               duration: 2,
//                               repeat: Infinity,
//                               ease: "easeInOut"
//                             }
//                           }
//                         }
//                         style={{ lineHeight: 1 }} // Helps with vertical centering of emojis
//                       >
//                         ❤️
//                       </motion.span>

//                       {/* Sparkles (kept as requested) */}
//                       <AnimatePresence>
//                           {hoveredTab && (
//                             <>
//                               <motion.div
//                                 initial={{ opacity: 0, scale: 0 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0 }}
//                                 className="absolute -top-1 -right-1 w-2 h-2 text-yellow-300"
//                               >
//                                 ✨
//                               </motion.div>
//                               <motion.div
//                                 initial={{ opacity: 0, scale: 0 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0 }}
//                                 transition={{ delay: 0.1 }}
//                                 className="absolute -top-2 left-0 w-2 h-2 text-yellow-300"
//                               >
//                                 ✨
//                               </motion.div>
//                             </>
//                           )}
//                         </AnimatePresence>
//                       {/* === END OF CORRECTED CHANGE === */}

//                       {/* The diamond shape at the bottom (kept as requested) */}
//                       <motion.div
//                         className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2"
//                         animate={
//                           hoveredTab ? {
//                             y: [0, -4, 0],
//                             transition: {
//                               duration: 0.3,
//                               repeat: Infinity,
//                               repeatType: "reverse"
//                             }
//                           } : {
//                             y: [0, 2, 0],
//                             transition: {
//                               duration: 1,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 0.5
//                             }
//                           }
//                         }
//                       >
//                         <div className="w-full h-full bg-white rotate-45 transform origin-center" />
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 )}
//               </a>
//             )
//           })}
//         </motion.div>
//       </div>
//     </div>
//   )
// }
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)
  // isMobile state is still useful if you have mobile-specific UI elements (like showing/hiding item names)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // This useEffect will update activeTab based on URL changes.
    // For Astro, window.location.pathname correctly reflects the current page.
    const currentUrlPath = window.location.pathname;
    const initialActiveItem = items.find(item => item.url === currentUrlPath);
    if (initialActiveItem) {
      setActiveTab(initialActiveItem.name);
    } else {
      // Fallback for root or unmatched paths to ensure defaultActive works
      const defaultItem = items.find(item => item.name === defaultActive);
      if (defaultItem && defaultItem.url === currentUrlPath) {
        setActiveTab(defaultActive);
      }
    }
  }, [items, defaultActive]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Example breakpoint for mobile
    }

    handleResize() // Set initial state
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    // CORRECTED PRIMARY CHANGE: Fixed to bottom across all screen sizes
    <div className="fixed inset-x-0 bottom-0 z-[9999]">
      {/* Remove pt-6 as it's at the bottom, and md:pt-0 is no longer needed */}
      <div className="flex justify-center pb-6"> {/* Added pb-6 for spacing from bottom */}
        <motion.div
          className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative"
          // Initial animation now always slides up from bottom
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            const isHovered = hoveredTab === item.name

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab(item.name)
                }}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                  "text-white/70 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.03, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                    <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                    <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                    <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />

                    <div
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                      style={{
                        animation: "shine 3s ease-in-out infinite"
                      }}
                    />
                  </motion.div>
                )}

                <motion.span
                  className="hidden md:inline relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
                <motion.span
                  className="md:hidden relative z-10"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </motion.span>

                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div
                    layoutId="anime-mascot"
                    // Adjust mascot top position since navbar is now at the bottom
                    className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="relative w-12 h-12">
                      <motion.span
                        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl"
                        animate={
                          hoveredTab ? {
                            scale: [1, 1.1, 1],
                            rotate: [0, -5, 5, 0],
                            transition: {
                              duration: 0.5,
                              ease: "easeInOut"
                            }
                          } : {
                            y: [0, -3, 0],
                            transition: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }
                        }
                        style={{ lineHeight: 1 }}
                      >
                        ❤️
                      </motion.span>

                      <AnimatePresence>
                          {isActive && ( // Sparkles remain persistent
                            <>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="absolute -top-1 -right-1 w-2 h-2 text-yellow-300"
                              >
                                ✨
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ delay: 0.1 }}
                                className="absolute -top-2 left-0 w-2 h-2 text-yellow-300"
                              >
                                ✨
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>

                      {/* The diamond shape at the bottom */}
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2"
                        animate={
                          hoveredTab ? {
                            y: [0, -4, 0],
                            transition: {
                              duration: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }
                          } : {
                            y: [0, 2, 0],
                            transition: {
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5
                            }
                          }
                        }
                      >
                        <div className="w-full h-full bg-white rotate-45 transform origin-center" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </a>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}