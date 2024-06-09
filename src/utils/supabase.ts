import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://gnqwmoqebpqfmqthyqkh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImducXdtb3FlYnBxZm1xdGh5cWtoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzcwNjMzMiwiZXhwIjoyMDMzMjgyMzMyfQ.UoVcqWY9Fn1VEKxkzPuc1iMImgCcC8CgNJKRKfNUVCY'
);

export async function uploadFileUsers(file: File) {
  console.log('file passou no upload: ' + file.name);

  const { data, error } = await supabase.storage
    .from('bubbles-bucket')
    .upload(`Users/${new Date().toISOString() + '-' + file.name}`, file);

  if (error) {
    return error.message;
  } else {
    return data.path;
  }
}

export async function getProfilePictureUrl(filePath: string) {
  const { data } = await supabase.storage
    .from('bubbles-bucket')
    .getPublicUrl(filePath);

  return data.publicUrl;
}

export async function uploadFileUserCover(file: File) {
  console.log('file passou no upload: ' + file.name);

  const { data, error } = await supabase.storage
    .from('bubbles-bucket')
    .upload(`UserCover/${new Date().toISOString() + '-' + file.name}`, file);

  if (error) {
    return error.message;
  } else {
    return data.path;
  }
}

export async function getProfileCoverUrl(filePath: string) {
  const { data } = await supabase.storage
    .from('bubbles-bucket')
    .getPublicUrl(filePath);

  return data.publicUrl;
}

export async function uploadFileBubbles(file: File) {
  console.log('file passou no upload: ' + file.name);

  const { data, error } = await supabase.storage
    .from('bubbles-bucket')
    .upload(`Bubbles/${new Date().toISOString() + '-' + file.name}`, file);

  if (error) {
    return error.message;
  } else {
    return data.path;
  }
}

export async function getCoverUrl(filePath: string) {
  const { data } = await supabase.storage
    .from('bubbles-bucket')
    .getPublicUrl(filePath);

  return data.publicUrl;
}

export async function uploadFileEvents(file: File) {
  console.log('file passou no upload: ' + file.name);

  const { data, error } = await supabase.storage
    .from('bubbles-bucket')
    .upload(`Events/${new Date().toISOString() + '-' + file.name}`, file);

  if (error) {
    return error.message;
  } else {
    return data.path;
  }
}

export async function getCoverEventsUrl(filePath: string) {
  const { data } = await supabase.storage
    .from('bubbles-bucket')
    .getPublicUrl(filePath);

  return data.publicUrl;
}
