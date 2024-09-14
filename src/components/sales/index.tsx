import { CircleDollarSign } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { AvatarImage, Avatar, AvatarFallback } from '../ui/avatar';

export default function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Last Clients
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>New clients in last 24h</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/daniilbaida.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm sm:text-base font-semibold">Daniil Baida</p>
            <span className="text-[13px] text-black/40 sm:text-sm">
              daniilbaida@gmail.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/tiago.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm sm:text-base font-semibold">Tiago Paiva</p>
            <span className="text-[13px] text-black/40 sm:text-sm">
              tiagopaiva@gmail.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/buenderino.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm sm:text-base font-semibold">Fabio Jose</p>
            <span className="text-[13px] text-black/40 sm:text-sm">
              fabiojose@gmail.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/rubsxyz.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm sm:text-base font-semibold">Ruben Teixeira</p>
            <span className="text-[13px] text-black/40 sm:text-sm">
              rubenteixeira@gmail.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
