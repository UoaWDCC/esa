'use client';

import { useForm } from 'react-hook-form';
import { SignupInput, signupSchema } from '@/lib/zod/schema/signupInput';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useAuthenticatedMember } from '@/features/members/data/tanstack/useAuthenticatedMember';
import type { Member } from '@/payload-types';

export default function Profile() {
  const router = useRouter();
  const member = useAuthenticatedMember();
  const formInitialized = useRef(false);
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const savedMessageTimeout = useRef<NodeJS.Timeout | null>(null);

  const mapMemberToForm = (member: Member): SignupInput => ({
    firstName: member.firstName,
    lastName: member.lastName,
    email: member.email,
    gender: member.gender,
    yearOfStudy: member.yearOfStudy ?? '1st Year',
    ethnicity: member.ethnicity ?? '',
    upi: member.upi ?? undefined,
    membershipCardNumber: member.membershipCardNumber ?? undefined,
    studentID: member.studentID ?? undefined,
    notes: member.notes ?? undefined,
    timestamp: new Date(member.timestamp),
  });

  const formattedMember = member ? mapMemberToForm(member) : undefined;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isSubmitted },
    reset,
    watch,
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: undefined,
  });

  // Initialize form once when member data is loaded
  useEffect(() => {
    if (formattedMember && !formInitialized.current) {
      reset(formattedMember);
      formInitialized.current = true;
    }
  }, [formattedMember, reset]);

  // Redirect unauthenticated users
  useEffect(() => {
    if (member === null) {
      router.replace('/');
    }
  }, [member, router]);

  const onSubmit = async (data: SignupInput) => {
    if (!member?.id) {
      alert('Member ID not found.');
      return;
    }
    try {
      const res = await fetch(`/api/members/${member.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to update profile');
      reset(data);

      // show success message
      setShowSavedMessage(true);

      // clear previous timeout if it exists
      if (savedMessageTimeout.current) {
        clearTimeout(savedMessageTimeout.current);
      }

      savedMessageTimeout.current = setTimeout(() => {
        setShowSavedMessage(false);
      }, 3000);
    } catch (error: any) {
      alert(error.message || 'An error occurred');
    }
  };

  if (!formattedMember) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
      <div className="relative text-white overflow-hidden lg:px-[13%] md:px-[10%] px-[6%] py-28">
          <div className="absolute left-0 top-230 w-full -z-10">
              <Image
                  src="/images/signup/background_star.png"
                  alt="ESA Signup"
                  width={700}
                  height={700}
                  className="absolute left-[20%] -translate-x-[80%] -top-[650px] hidden md:block"
              />
              <Image
                  src="/images/signup/white_background_star.png"
                  alt="ESA Signup"
                  width={450}
                  height={450}
                  className="absolute right-[5%] translate-x-[20%] -top-[250px] hidden md:block"
              />
              <Image
                  src="/images/signup/background_star_mobile.png"
                  alt="ESA Signup"
                  width={400}
                  height={400}
                  className="absolute right-[40%] translate-x-[80%] -rotate-180 bottom-[-60px] md:hidden block select-none -z-5"
              />
          </div>

          <h2 className="text-primary-red text-center">Profile</h2>

          <div className="w-full mx-auto text-center text-primary-white flex flex-col items-center tracking-widest">
              <p className="text-primary-white mb-6">View and edit your ESA profile!</p>
          </div>

          <hr className="w-[90%] h-[2px] bg-white opacity-50 my-4 mx-auto" />

          <div className="justify-center px-8">
              <h2 className="text-primary-white text-start mt-8 max-w-3xl mx-auto">
                  {watch('firstName') || 'firstname'}
                  <br />
                  {watch('lastName') || 'lastname'}
              </h2>

              <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="max-w-3xl mx-auto justify-center gap-4 mt-8 m-4 w-full"
              >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full">
                      <FormInput
                          label="First Name"
                          placeholder="Enter Here"
                          {...register('firstName')}
                          error={errors.firstName}
                          className="w-full placeholder:text-gray"
                      />
                      <FormInput
                          label="Last Name"
                          placeholder="Enter Here"
                          {...register('lastName')}
                          error={errors.lastName}
                          className="w-full placeholder:text-gray"
                      />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 w-full">
                      <FormInput
                          label="Ethnicity"
                          placeholder="Enter Here"
                          {...register('ethnicity')}
                          error={errors.ethnicity}
                          className="w-full placeholder:text-gray"
                      />
                      <FormSelect
                          label="Year of Study"
                          placeholder="Choose Dropdown"
                          {...register('yearOfStudy')}
                          error={errors.yearOfStudy}
                          options={[
                              { value: '1st Year', label: '1st Year' },
                              { value: '2nd Year', label: '2nd Year' },
                              { value: '3rd Year', label: '3rd Year' },
                              { value: '4th Year+', label: '4th Year+' },
                          ]}
                          className="w-full"
                      />
                      <FormSelect
                          label="Gender"
                          placeholder="Choose Dropdown"
                          {...register('gender')}
                          error={errors.gender}
                          options={[
                              { value: 'prefer not to say', label: 'Prefer not to say' },
                              { value: 'male', label: 'Male' },
                              { value: 'female', label: 'Female' },
                              { value: 'other', label: 'Other' },
                          ]}
                          className="w-full"
                      />
                  </div>

                  <FormInput
                      label="Email Address"
                      placeholder="Enter Here"
                      {...register('email')}
                      error={errors.email}
                      className="w-full placeholder:text-gray bg-primary-grey-light"
                      disabled
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full">
                      <FormInput
                          label="UPI"
                          placeholder="Enter your UPI"
                          {...register('upi')}
                          error={errors.upi}
                          className="w-full md:flex-1 placeholder:text-gray"
                      />
                      <FormInput
                          label="Membership Card Number"
                          placeholder="Enter Card Number"
                          {...register('membershipCardNumber')}
                          error={errors.membershipCardNumber}
                          className="w-full md:flex-1 placeholder:text-gray"
                      />
                  </div>

                  <FormInput
                      label="Notes"
                      placeholder="Enter notes here"
                      {...register('notes')}
                      error={errors.notes}
                      className="h-20 w-full placeholder:text-gray"
                      textarea
                  />

                  <div className="flex justify-end gap-x-4 mt-4">
                      <div className="mr-auto">
                          <Button
                              type="button"
                              className="bg-primary-red hover:bg-[#e63d37] rounded-full w-fit flex items-center gap-x-2 select-none z-10"
                              variant={null}
                              onClick={() => signOut({ callbackUrl: '/' })}
                          >
                              Sign Out
                          </Button>
                      </div>
                      <Button
                          type="button"
                          className={`border bg-primary-grey/80 hover:bg-[#272727] border-white rounded-full w-fit flex items-center gap-x-2 select-none z-10 ${!isDirty ? 'invisible' : ''}`}
                          variant={null}
                          onClick={() => reset()}
                          disabled={isSubmitting}
                      >
                          Cancel
                      </Button>
                      <Button
                          type="submit"
                          className={`w-fit flex items-center gap-x-2 select-none z-10 ${!isDirty ? 'invisible' : ''}`}
                          disabled={isSubmitting}
                      >
                          {isSubmitting ? 'Saving...' : 'Save'}
                      </Button>
                      <p>{showSavedMessage && 'Profile Saved!'}</p>
                  </div>
              </form>
          </div>
      </div>
  );
}
