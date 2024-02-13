import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Link,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { doc, setDoc } from "firebase/firestore";

import { app, db, database } from "@/firebase";

export default function Orbit() {
  type Submission = {
    type: string;
    website: string;
    name_of_project: string;
    Github: string;
    Twitter: string;
    description: string;
    id: number;
  };

  const types = [
    "Hyperlane ISM",
    "Hyperlane hooks",
    "Permissionless deployments",
    "Partners",
    "Hyperlane Apps",
  ];

  const [submission, setSubmission] = useState<Submission>({
    type: "",
    website: "",
    name_of_project: "",
    Github: "",
    Twitter: "",
    description: "",
    id: Math.floor(Math.random() * 1000000),
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAddButtonClicked = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleAddDoc = async () => {
    setSuccessMessage("");
    setErrorMessage("");

    // if (submission.quest_id === null) {
    //   setErrorMessage("Please select a quest");
    //   return;
    // }
    // if (submission.submission === "") {
    //   setErrorMessage("Please enter your submission");
    //   return;
    // }

    try {
      const dbInstance = collection(database, "orbit");
      const volunteerDocRef = doc(dbInstance, submission.id.toString());
      await setDoc(volunteerDocRef, {
        ...submission,
      });
      setSuccessMessage("Project submitted successfully");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error submitting Project");
    }
  };

  return (
    <>
      <section className="bg-[url('../public/Frame2.svg')]  bg-[#2362C0] bg-cover bg-center  px-10  py-10  flex justify- items-center    flex-col  w-full pt-2 sm:pt-3 ">
        <div className=" mx-auto max-w-7xl pt-5  lg:pt-28 justify-center items-start flex text-center w-full  mt-10  z-20">
          <div className="relative mt-14  lg:mt-2    ">
            <span className="text-4xl md:text-5xl  lg:text-7xl  relative  font-bold sm:text-5xl text-[#d631b9]">
              Hyperlane
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl  font-bold sm:text-5xl absolute  text-white  left-[0.3rem] m:left-[0.4rem]">
              Hyperlane
            </span>
          </div>
          <div className="relative mt-14 ml-4  lg:mt-2    ">
            <span className="text-4xl md:text-5xl  lg:text-7xl  relative  font-bold sm:text-5xl text-[#d631b9]">
              Orbit
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl  font-bold sm:text-5xl absolute  text-white  left-[0.3rem] sm:left-[0.4rem] ">
              Orbit
            </span>
          </div>
        </div>

        <span className=" text-xs max-w-[14rem] md:max-w-xs lg:max-w-lg  lg:px-5  lg:text-base mt-5 text-center  font-sans font-semibold   text-neutral-200">
          An open-source directory of Hyperlane implementations and deployments
          that you can use in your project. And more Hyperlane ecosystem
          projects for you to discover!
        </span>

        <div className="flex justify-center items-center w-2/3 mt-10">
          <button
            onClick={() => {
              setSuccessMessage("");
              setErrorMessage("");
              onOpen();
            }}
            className=" bg-[#d631b9] w-fit rounded-full py-2 font-semibold  text-sm hover:scale-105 transition-all lg:text-xl  border-2  flex  border-white px-4 text-white "
          >
            Submit new
          </button>

          <Modal
            isOpen={isOpen}
            className=" bg-[#d631b9]"
            onOpenChange={onOpenChange}
            classNames={{
              closeButton:
                " text-white hover:bg-[#d631b9] hover:bg-opacity-80 hover:text-white",
            }}
          >
            {successMessage ? (
              <>
                {/* success message */}

                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex font-body4 py-6 text-white  text-base  font-normal tracking-wide gap-1">
                        {successMessage}
                      </ModalHeader>
                    </>
                  )}
                </ModalContent>
              </>
            ) : (
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-white">
                      Submit your quest
                    </ModalHeader>
                    <ModalBody>
                      <Select
                        classNames={{
                          label: "text-white/90",
                          popover:
                            "bg-[#d631b9] border-[#d631b9] text-white/90 border border-white/90",
                        }}
                        label="Type of your project"
                        variant="bordered"
                        defaultValue={types[0]}
                        onChange={(event) =>
                          setSubmission({
                            ...submission,
                            type: event.target.value,
                          })
                        }
                      >
                        {types.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </Select>

                      <Input
                        type="text"
                        variant="bordered"
                        label="Website link if any"
                        onChange={(event: any) => {
                          setSubmission({
                            ...submission,
                            website: event.target.value,
                          });
                        }}
                        classNames={{
                          label: "text-white/90",
                          input: [
                            "bg-transparent",
                            "text-white/90",
                            "placeholder:text-white/60",
                          ],
                        }}
                      />
                      <Input
                        type="text"
                        variant="bordered"
                        label="Name of your project"
                        onChange={(event: any) => {
                          setSubmission({
                            ...submission,
                            name_of_project: event.target.value,
                          });
                        }}
                        classNames={{
                          label: "text-white/90",
                          input: [
                            "bg-transparent",
                            "text-white/90",
                            "placeholder:text-white/60",
                          ],
                        }}
                      />

                      <Input
                        type="text"
                        variant="bordered"
                        label="Github link"
                        onChange={(event: any) => {
                          setSubmission({
                            ...submission,
                            Github: event.target.value,
                          });
                        }}
                        classNames={{
                          label: "text-white/90",
                          input: [
                            "bg-transparent",
                            "text-white/90",
                            "placeholder:text-white/60",
                          ],
                        }}
                      />

                      <Input
                        type="text"
                        variant="bordered"
                        label="Twitter profile link"
                        onChange={(event: any) => {
                          setSubmission({
                            ...submission,
                            Twitter: event.target.value,
                          });
                        }}
                        classNames={{
                          label: "text-white/90",
                          input: [
                            "bg-transparent",
                            "text-white/90",
                            "placeholder:text-white/60",
                          ],
                        }}
                      />
                      <Input
                        type="text"
                        variant="bordered"
                        label="a short description of your project"
                        onChange={(event: any) => {
                          setSubmission({
                            ...submission,
                            description: event.target.value,
                          });
                        }}
                        classNames={{
                          label: "text-white/90",
                          input: [
                            "bg-transparent",
                            "text-white/90",
                            "placeholder:text-white/60",
                          ],
                        }}
                      />
                    </ModalBody>
                    {errorMessage && (
                      <div className=" text-white w-full  text-center text-sm">
                        {errorMessage}
                      </div>
                    )}
                    <ModalFooter>
                      <Button
                        color="primary"
                        className=" bg-[#2362C0]"
                        onClick={handleAddDoc}
                      >
                        Submit
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            )}
          </Modal>
        </div>
      </section>
      <section className="bg-[#2362C0] pb-16">
        <div className="  max-w-[90%] 2xl:max-w-[90%] mx-auto  ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center items-center w-full h-full justify-items-center   pb-10 ">
            <ReusableRFC
              title="Core Deployments"
              description="14 Deployments"
              link="/deployments"
            />
            <ReusableRFC
              title="Chains/Rollups"
              description="14 Rollups"
              link="/rollups"
            />
            <ReusableRFC title="Apps" description="15 Apps" link="/apps" />

            <div className="bg-transparent justify-center mt-5 relative border-2  flex flex-col 2xl:w-[324px] 2xl:h-[240px] w-[245px] h-[181px]  lg:w-[270px] lg:h-[200px] px-8 rounded-2xl  py-3 text-center border-white hover:border-[#d631b9] transition-all duration-150 ease-in-out">
              <Link href="/projects">
                <div className="flex flex-col">
                  <span className="text-white text-xl lg:text-2xl font-bold   decoration-white decoration-1  underline-offset-[6px]">
                    See Hackathon Projects
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface ReusableRFCProps {
  title: string;
  description: string;
  link: string;
}

const ReusableRFC: React.FC<ReusableRFCProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <Link href={link}>
      <div className="bg-transparent justify-center mt-5 relative border-2  flex flex-col 2xl:w-[324px] 2xl:h-[240px] w-[245px] h-[181px]  lg:w-[270px] lg:h-[200px] px-8 rounded-2xl  py-3 text-center border-white hover:border-[#d631b9] transition-all duration-150 ease-in-out">
        <div className="flex flex-col">
          <span className="text-white text-xl lg:text-2xl font-bold underline  decoration-white decoration-1  underline-offset-[6px]">
            {title}
          </span>
          <span className="text-white text-xs lg:text-lg font-semibold mt-3">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
};
