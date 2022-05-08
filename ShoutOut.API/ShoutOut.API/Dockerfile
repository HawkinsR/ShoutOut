#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ShoutOut.API/ShoutOut.API.csproj", "ShoutOut.API/"]
RUN dotnet restore "ShoutOut.API/ShoutOut.API.csproj"
COPY . .
WORKDIR "/src/ShoutOut.API"
RUN dotnet build "ShoutOut.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ShoutOut.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ShoutOut.API.dll"]