/**
 * Using typescript lib Error type for handling error message
 * 
 * interface Error {
    name: string;
    message: string;
    stack?: string;
}
 */
type ErrorWithMessage = {
  error: Error;
};

export default function Error({ error }: ErrorWithMessage) {
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  );
}
