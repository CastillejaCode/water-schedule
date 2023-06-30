import { supabase, supabaseAdmin } from "@/features/auth/lib/auth";

export const getName = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (sessionStorage.getItem("uid")) return "Guest";

  if (error) throw error;
  const name = await data.session?.user.user_metadata.first_name;
  return name;
};

export const changeName = async (name: string) => {
  const { error } = await supabase.auth.updateUser({
    data: { first_name: name },
  });
  if (error) throw error;
};

export const changeEmail = async (email: string) => {
  const { error } = await supabase.auth.updateUser({ email });
  if (error) throw error;
};

export const changePassword = async (password: string) => {
  const { error } = await supabase.auth.updateUser({ password });
  if (error) throw error;
};

export const deleteUser = async (uid: string) => {
  const { error } = await supabaseAdmin.auth.admin.deleteUser(uid);
  if (error) throw error;
};
